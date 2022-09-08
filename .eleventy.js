module.exports = function(config){
    config.addCollection('pages', collection => {
        //return all pages that are markdown files
        return collection.getFilteredByGlob('src/site/*.md');
    })
    config.addPassthroughCopy("src/site/assets/images");
    config.addPassthroughCopy("src/site/assets/js");
    
    return {
        dir: {
            input: "src/site",
            output: "dist",
            includes: "templates"
        },
        templateFormats: ["html", "md", "css", "js"],
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid"
    }
}