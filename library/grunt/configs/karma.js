module.exports = {
    main: {
        options: {
            configFile: 'karma.conf.js'
        },
        exclude: [
            'library/scripts/main.js'
        ],
        reporters: ['dots'],
        singlerun: true,
        port: 9876,
        colors: true,
        captureTimeout: 60000,
        background: true,
        frameworks: [
            'jasmine',
            'requirejs'
        ],
        browsers: [
            'Chrome',
            'Firefox',
            'PhantomJS'
        ]
    }
};