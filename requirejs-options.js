module.exports = {
    baseUrl: "src/js",
    dir: "build",
    paths: {
    },
    locale: "sv",
    optimize: "none", //"uglify2"
    optimizeCss: "standard",
    inlineText: true,
    modules: [
        {
            name: "main"
        }
    ],
    mainConfigFile: './src/js/main.js'
};