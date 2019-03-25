import React , { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Masonry from 'react-masonry-component'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider";

class Home extends Component {
  render() {
    const posts = this.props.data.allWordpressPost;

    console.log(posts)
    return (
      <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Slider />
      <div style={{display: `flex` }}>
        <section className="posts">
          <Masonry className="masonry">
            {posts.edges.map(({ node }) => (
            <div key={node.slug} className="post-index">

            {node.acf.imagem_grandona && (
              <div>
                <div className="thumb-img"> 
                  <Link to={`/${node.slug}`}>
                    <Img fluid={node.acf.imagem_grandona.localFile.childImageSharp.fluid} />
                  </Link>
                </div>

                <img alt={node.author.name} src={node.author.avatar_urls.wordpress_96} className="author-img"/>
              </div>
            )}

              <Link to={`/${node.slug}`}>
                <h3>{node.title}</h3>
              </Link>
              
              <p>{node.excerpt}</p>
            </div>
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

export const pageQuery =  graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
            avatar_urls {
              wordpress_96
            }
          }
          acf {
            imagem_grandona {
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

