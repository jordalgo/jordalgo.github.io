module.exports = {
    options: {
      livereload: true, //default port 35729
    },
    main: {
        files: [
            'library/scripts/**/*.js',
            'library/scripts/tests/**/*.js',
            '!library/scripts/vendor/*.js'
        ],
        tasks: [
            'jshint:main',
            'karma:main:run',
            'requirejs:main'
        ]
    },
    less: {
        files: [
            'library/style/**/*.less'
        ],
        tasks: ['less']
    },
    html: {
        files: ['library/html/index.html'],
        tasks: ['replace']
    },
    jst: {
        files: ['library/scripts/templates/*.html'],
        tasks: ['jst']
    },
    version: {
        files: ['package.json'],
        tasks: ['less', 'requirejs:main']
    }
};