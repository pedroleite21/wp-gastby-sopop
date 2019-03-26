import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby";

class MenuHeader extends Component {

    state = {
        open: false,
        openDepth2:false
    }

    openDropdown = (item, depth2 = false) => {
        if(item.wordpress_children) {
            if(!depth2)
                this.setState({open: true});
            else 
                this.setState({openDepth2: true});
        }
    }

    closeDropdown = (item, depth2 = false) => {
        if(item.wordpress_children) {
            if(!depth2)
               this.setState({open: false});
            else 
                this.setState({openDepth2: false});
        }
    }

    renderLink = ( item ) =>(
        <li key={item.object_slug}
            onMouseEnter={() => this.openDropdown(item)}
            onMouseLeave={() => this.closeDropdown(item)}
        >
            <Link
                to={`/${item.object_slug}`}
            >
                {item.title}
            </Link>
            {(item.wordpress_children && this.state.open) && (
                <ul className="dropdown">
                    {item.wordpress_children.map((child) => (
                        this.renderChildren(child)
                    ))}
                </ul>
            )}
        </li>
    )

    renderChildren = ( child ) => {
        return(
        <li key={child.object_slug}
            onMouseEnter={() => this.openDropdown(child, true)}
            onMouseLeave={() => this.closeDropdown(child, true)}
        >
            <Link
                to={`/${child.object_slug}`}
            >
                {child.title}

                {(child.wordpress_children) && (
                    <i className="material-icons">chevron_right</i>
                )}
            </Link>
            {(child.wordpress_children && this.state.openDepth2) && (
                <ul className="dropdown depth-2">
                    {child.wordpress_children.map((child) => (
                        this.renderChildren(child)
                    ))}
                </ul>
    
            )}
        </li>
        )
    }

    render() {
        return (
            <StaticQuery
            query={graphql`
            query {
                allWordpressWpApiMenusMenusItems(filter: {slug: {eq: "menu"}}) {
                    edges {
                    node {
                        name
                        items {
                        title
                        url
                        type
                        wordpress_children {
                            title
                            object
                            url
                            wordpress_children {
                            title
                            object
                            url
                            }
                        }
                        }
                    }
                    }
                }
            }`}
        render={data => {
            let menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;

            return(
                <div className="menu">
                    <ul>
                            {menuItems.map((item) => { 
                                return(
                                    this.renderLink(item)
                                )
                            })}
                    </ul>
                </div>
            )
        }}
        />
    )
    }

}

export default MenuHeader