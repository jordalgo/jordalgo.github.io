module.exports = {
    options: {
        optimize: 'uglify2',
        generateSourceMaps: true,
        preserveLicenseComments: false
    },
    main: {
        options: {
            baseUrl: 'library/scripts',
            mainConfigFile: 'library/scripts/main.js',
            name: 'main',
            out: 'library/scripts/build/main-<%= pkg.version %>.min.js',
            paths: {
                'jQuery': 'empty:',
                'lodash': 'empty:'
            }
        }
    }
};