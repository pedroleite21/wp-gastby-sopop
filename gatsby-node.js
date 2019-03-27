const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            wordpress_id
            slug
          }
        }
      }
      allWordpressTag {
        edges {
          node {
            slug
            id
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            slug
            id
            path
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost, allWordpressTag, allWordpressCategory } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const tagTemplate = path.resolve(`./src/templates/page.js`);
  allWordpressTag.edges.forEach(edge => {
    createPage({
      path: `/tag/${edge.node.slug}`,
      component: slash(tagTemplate),
      context: {
        id: edge.node.id,
      }
    })
  })

  const categoryTemplate = path.resolve(`./src/templates/page.js`);
  allWordpressCategory.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(categoryTemplate),
      context: {
        id: edge.node.id,
      }
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        postId: edge.node.wordpress_id,
      },
    })
  })
}
