// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\templates\\page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-post-js": () => import("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\templates\\post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---cache-dev-404-page-js": () => import("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\src\\pages\\page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "C:\\Users\\LIS\\Desktop\\wp-gastby-sopop\\.cache\\data.json")

