import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Masonry from 'react-masonry-component'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider";
import IndexPosts from "../components/indexPosts";

class Home extends Component {
  render() {
    const posts = this.props.data.allWordpressPost;

    console.log(posts)
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Slider />

        <div className="main">
          <section className="posts">
            <Masonry className="masonry">
              {posts.edges.map(({ node }, index) => (
                <IndexPosts key={node.slug} posts={node} index={index}/>
              ))}
            </Masonry>
          </section>

          <section className="sidebar">
            <div>
              <h1>oi</h1>
            </div>
          </section>
        </div>

        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          date
          categories {
            name
            path
            slug
          }
          author {
            name
            slug
            avatar_urls {
              wordpress_96
            }
          }
          acf {
            featured_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth:600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }

`