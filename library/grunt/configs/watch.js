module.exports = {
    options: {
      livereload: true, //default port 35729
    },
    javascript: {
        files: [
            'library/scripts/**/*.js',
            '!library/scripts/vendor/*.js',
            '!library/scripts/templates/*.js',
            '!library/scripts/build/*.js'
        ],
        tasks: [
            'jshint:main',
            'browserify:dev'
        ]
    },
    templates: {
        files: ['library/scripts/templates/*.hbs'],
        tasks: ['handlebars']
    },
    style: {
        files: [
            'library/style/**/*.less'
        ],
        tasks: ['less']
    },
    html: {
        files: ['library/html/**/*.html'],
        tasks: ['replace:test']
    }
};