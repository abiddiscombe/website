const htmlmin = require("html-minifier");

module.exports = function (config) {
    config.addPassthroughCopy({
        'src/_assets/font': './font',
        'src/_assets/media': './media',
        'src/_assets/scripts': './scripts',

        // Passthrough the PostCSS output.
        'src/_assets/main.out.css': './main.css',
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        },
        passthroughFileCopy: true,
    };
};