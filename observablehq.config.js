// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Liberate Science GmbH",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    { name: "Purpose-Vision-Mission", path: "/purpose-vision-mision" },
    { name: "Market analysis", path: "/market" },
    { name: "What we offer", path: "/product" },
    // {
    //   // name: "Examples",
    //   pages: [
    //     {name: "Report", path: "/example-report"}
    //   ]
    // }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // Some additional configuration options and their defaults:
  theme: "light", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // root: "docs", // path to the source root for preview
  // output: "dist", // path to the output root for build
  // search: true, // activate search
};
