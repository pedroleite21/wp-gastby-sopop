import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { DiscussionEmbed } from "disqus-react";


class PostTemplate extends Component {
  render() {
    const post  = this.props.data.wordpressPost;
    const disqusShortname = "SoPOP";
    const disqusConfig = {
      identifier: post.id,
      title: post.title,
    };
    console.log(this.props.data);
    return(
    <Layout>
      <SEO title={post.title} />
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
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  } 
`