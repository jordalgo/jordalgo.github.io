module.exports = {
    compile: {
        options: {
            prettify: false,
            amd: true
        },
        files: {
            "library/scripts/templates/compiled.js": ["library/scripts/templates/*.html"]
        }
    }
};