module.exports = function (config) {
    config.addPassthroughCopy({
        'src/_assets/font': './font',
        'src/_assets/media': './media',

        // Passthrough the Robots TXT.
        'src/_assets/robots.txt': './robots.txt',

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