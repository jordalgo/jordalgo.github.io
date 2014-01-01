var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/library/scripts',

    paths: {
        jQuery: [
            'vendor/jquery-1.8.1.min'
        ],
        lodash: [
            'vendor/lodash.underscore.min'
        ],
        modernizer: 'vendor/modernizr-2.6.1-respond-1.1.0.min'
    },

    shim: {
        'jQuery': {exports: 'jQuery'}
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});