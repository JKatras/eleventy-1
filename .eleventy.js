module.exports = function(config){
    config.addCollection('pages', collection => {
        //return all pages that are markdown files
        return collection.getFilteredByGlob('src/site/pages/*.md');
    })
    return {
        dir: {
            input: "src/site",
            output: "dist",
            includes: "templates"
        },
        templateFormats: ["html", "md"],
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid"
    }
}