const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\templates\\page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\templates\\post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\pages\\page-2.js")))
}

