import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

class IndexPosts extends Component {
    render() {
        let node = this.props.posts;
        
        return (
            <article className="post-index">
                {node.acf.featured_image && (
                    <div>
                        <div className="thumb-img">
                            <Link to={`/${node.slug}`}>
                                <Img fluid={node.acf.featured_image.localFile.childImageSharp.fluid} />
                            </Link>
                        </div>

                        {/* <img alt={node.author.name} src={node.author.avatar_urls.wordpress_96} className="author-img" /> */}
                    </div>
                )}

                <Link to={`/${node.slug}`}>
                    <h3>{node.title}</h3>
                </Link>

                <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
            </article >
        )
    }
}

export default IndexPosts;