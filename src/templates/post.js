import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { DiscussionEmbed } from "disqus-react";
import Img from "gatsby-image";

const HeaderPost = ({ acf }) => {
  if (acf.featured_image) {
    return (
      <div className="post-image-featured">
        <Img fluid={acf.featured_image.localFile.childImageSharp.fluid} />
      </div>
    )
  } else {
    return null;
  }
}

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;
    const disqusShortname = "SoPOP";
    const disqusConfig = {
      identifier: post.id,
      title: post.title,
    };
    console.log(this.props.data);
    return (
      <Layout>
        <SEO title={post.title} />

        <HeaderPost acf={post.acf} />

        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <Link to="/">Go back to the homepage</Link>

        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }){
      title
      id
      content
      path
      acf {
        featured_image {
          localFile {
            childImageSharp {
              fluid(maxWidth:1800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  } 
`