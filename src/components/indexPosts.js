import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

var moment = require('moment');

class IndexPosts extends Component {
    render() {
        let node = this.props.posts;

        let classesCat = 'post-index';
        if (node.categories) {
            node.categories.map((i) => {
                classesCat = classesCat + ` ${i.slug}`;
                return null;
            })
        }

        return (
            <article className={classesCat}>
                <div className="background">
                    {node.acf.featured_image && (
                        <div className="thumb-img">
                            <Link to={`/${node.slug}`}>
                                <Img fluid={node.acf.featured_image.localFile.childImageSharp.fluid} />
                            </Link>
                        </div>
                    )}

                    <div className="info">
                        <div className="info-meta">
                            {(node.author.avatar_urls && node.acf.featured_image) && (
                                <img alt={node.author.name} src={node.author.avatar_urls.wordpress_96} className="author-img" />
                            )}

                            <div className="line">
                                <div className={'date'}>
                                    {moment(node.date).format("[em] DD/MM/YYYY")}
                                </div>

                                {(node.categories) && (
                                    <div class="categories">
                                        {node.categories.map((i) => (
                                        <Link className={`link-cat ${i.slug}`} to={`/${i.path}`}>
                                            {i.name}
                                        </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>

                        <Link to={`/${node.slug}`}>
                            <h3>{node.title}</h3>
                        </Link>

                        <div className="text" dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
                    </div>

                    <div className="meta">
                        {/* {node.author.avatar_urls && (
                            <img alt={node.author.name} src={node.author.avatar_urls.wordpress_96} className="author-img" />
                        )} */}
                    </div>

                </div>
            </article >
        )
    }
}

export default IndexPosts;