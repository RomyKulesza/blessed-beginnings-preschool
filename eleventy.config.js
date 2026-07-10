const markdownIt = require("markdown-it");
const md = markdownIt({ html: true, linkify: true, typographer: true, breaks: true });

module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the output folder
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  // Markdown filters (for rich-text fields edited in the CMS)
  eleventyConfig.addFilter("md", (s) => (s ? md.render(s) : ""));
  eleventyConfig.addFilter("mdInline", (s) => (s ? md.renderInline(s) : ""));

  // Current year helper for the footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Pages the editor created and flagged to show in the top menu
  eleventyConfig.addCollection("navPages", (api) =>
    api
      .getFilteredByGlob("src/pages/*.md")
      .filter((p) => p.data.showInNav)
      .sort((a, b) => (a.data.navOrder || 0) - (b.data.navOrder || 0))
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
