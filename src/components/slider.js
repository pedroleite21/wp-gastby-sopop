import React, { Component } from 'react';
import Slider from 'react-slick';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image";

export default class SliderPosts extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:3000
    };
    return (
      <StaticQuery
        query={graphql`
            query {
              allWordpressPost(sort: {fields: [date], order: DESC}, filter: {acf: {featured_post: {eq: true}}}) {
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
                      featured_image {
                        localFile {
                          childImageSharp {
                            fluid(maxWidth:1400) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }`}
        render={data => {
          let posts = data.allWordpressPost.edges;

          console.log(posts);
          return (
            <Slider {...settings} className="featured-posts">
              {posts.map(({ node }) => {
                if (node.acf.featured_image) {
                  return (
                    <div key={node.slug} class="featured-item">
                      <div className="featured-image">
                        <Link
                          to={`/${node.slug}`}
                        >
                          <Img fluid={node.acf.featured_image.localFile.childImageSharp.fluid} />
                        </Link>
                      </div>

                      <div className="featured-info">
                        <Link
                          to={`/${node.slug}`}
                        >
                          <h3>{node.title}</h3>
                        </Link>
                      </div>
                    </div>
                  )
                } else {
                  return null;
                }
              })}
            </Slider>
          );
        }}
      />
    );
  }
}