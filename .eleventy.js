module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addPassthroughCopy('favicon.ico')
    eleventyConfig.addPassthroughCopy('favicon.png')
    eleventyConfig.addPassthroughCopy('pdf')
    eleventyConfig.addPassthroughCopy('tripplanner')
    eleventyConfig.addPassthroughCopy('js')
  }