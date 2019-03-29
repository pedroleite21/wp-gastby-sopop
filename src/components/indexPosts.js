import React, { Component } from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp, faPinterest, faTumblr } from '@fortawesome/free-brands-svg-icons';
import Img from "gatsby-image"

var moment = require('moment');

const linkSite = 'http://sopop.netlify.com/'

const SocialMedia = ({ node }) => {
    return (
        <div className="social-media">
            <a className="facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${linkSite}${node.slug}`}>
                <FontAwesomeIcon key='facebook' icon={faFacebookF} />
            </a>
            <a className="twitter" href={`https://twitter.com/intent/tweet?text=${node.title}&amp;url=${linkSite}${node.slug}&amp;via=SoPOP`}>
                <FontAwesomeIcon key='twitter' icon={faTwitter} />
            </a>
            <a className="whats" href={`whatsapp://send?text=${linkSite}${node.slug}`} data-action="share/whatsapp/share">
                <FontAwesomeIcon key='whats' icon={faWhatsapp} />
            </a>
            {(node.acf.featured_image) && (
                <a className="pinterest" href={`https://pinterest.com/pin/create/button/?url=${linkSite}${node.slug}&amp;media=${linkSite}${node.acf.featured_image.localFile.childImageSharp.fluid.src}&amp;description=${node.title}`}>
                    <FontAwesomeIcon key='pinterest' icon={faPinterest} />
                </a>
            )}
            <a className="tumblr" href={`http://tumblr.com/widgets/share/tool?canonicalUrl=${linkSite}${node.slug}`}>
                <FontAwesomeIcon key='tumblr' icon={faTumblr} />
            </a>
        </div>
    )
}

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
                                    <div className="categories">
                                        {node.categories.map((i) => (
                                            <Link className={`link-cat ${i.slug}`} to={`${i.path}`}>
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

                        <div
                            className="text" dangerouslySetInnerHTML={{ __html: node.excerpt }}
                        />

                        <div className="meta">
                            <Link to={`/${node.slug}`} className="read-more button">
                                Leia mais
                                <i className="material-icons">
                                    arrow_right_alt
                                </i>
                            </Link>

                            <div className="line">
                                <div className="author">
                                    por <a>{node.author.name}</a>
                                </div>

                                <SocialMedia key="social" node={node} />
                            </div>
                        </div>
                    </div>

                </div>
            </article >
        )
    }
}

export default IndexPosts;