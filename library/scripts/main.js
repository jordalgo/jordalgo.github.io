requirejs.config({
    baseUrl: './library/scripts',
    paths: {
        jQuery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
            'vendor/jquery-1.8.1.min'
        ],
        lodash: [
            'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.underscore.min',
            'vendor/lodash.underscore.min'
        ],
        modernizer: 'vendor/modernizr-2.6.1-respond-1.1.0.min'
    },
    shim: {
        'jQuery': {exports: 'jQuery'}
    }
});

require([
    'jQuery',
    'modernizer',
    'modules/event-listeners',
    'modules/adjust-padding-bottom',
    'modules/load-work'
], function(
    $,
    modernizer,
    setEventListeners,
    adjustPaddingBottom,
    loadMoreWork
) {

    //for IE not supporting console.log
    if (!window.console) window.console = {};
    if (!window.console.log) window.console.log = function () { };


    $(document).ready(function(){

        var WINDOW_WIDTH = $(window).width();

        setEventListeners();

        //tablet or bigger
        if (WINDOW_WIDTH > 750) {
            adjustPaddingBottom($('.contact'));
        }

        //desktop - assume wifi or better
        if (WINDOW_WIDTH > 979) {
           loadMoreWork($('.work-site-container'));
        }

        //fade in the page
        $('.yes-js').animate({ 'opacity' : 1}, 2000);

    });

});