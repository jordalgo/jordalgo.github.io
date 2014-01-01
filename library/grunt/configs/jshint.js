module.exports = {
    options: {
        curly: false,
        eqeqeq: true,
        eqnull: false,
        browser: true,
        smarttabs: true,
        globals: {
            jQuery: true,
            console: true,
            module: true,
            document: true
        }
    },
    main: {
		files: {
			src: [
                'library/scripts/**/*.js',
                '!library/scripts/build/*.js',
                '!library/scripts/vendor/*.js',
                '!library/scripts/templates/*.js'
            ]
		}
	}
};