define(['jQuery'], function($) {

    var adjustPaddingBottom = function(el) {
        
        var WINDOW_HEIGHT = window.innerHeight;

        if (WINDOW_HEIGHT > el.height()) el.css({"padding-bottom" : WINDOW_HEIGHT - el.height()});
            
    };

    return adjustPaddingBottom;

});