module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/blog");
    eleventyConfig.addPassthroughCopy("./src/team");
    eleventyConfig.addPassthroughCopy("./src/work");
    eleventyConfig.addPassthroughCopy("./src/_redirects");
    eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "/robots.txt" });



    eleventyConfig.addFilter("dateOnly", function (dateVal, locale = "en-us") {
      var theDate = new Date(dateVal);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return theDate.toLocaleDateString(locale, options);
    });

       // Custom filter to filter collections by multiple tags
  eleventyConfig.addFilter("filterByTags", (collection, tags) => {
    return collection.filter(item => 
      tags.every(tag => item.data.tags && item.data.tags.includes(tag))
    );
  });

    // Custom filter to count posts by category
  eleventyConfig.addFilter("countByCategory", (collection, category) => {
    return collection.filter(post =>
      post.data.categories && post.data.categories.includes(category)
    ).length;
  });

 

    return {

        // allows .html files to contain nunjucks templating language
        htmlTemplateEngine: "njk",
        htmlTemplateEngine: "liquid",
         dir: {
           input: "src",
           includes: "_includes",
           output: "public"
         }
         
       }
}