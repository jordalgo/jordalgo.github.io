var $ = require('jQuery');

var adjustPaddingBottom = function(el) {
    
    var WINDOW_HEIGHT = window.innerHeight;

    if (WINDOW_HEIGHT > el.offsetHeight) el.style.paddingBottom = WINDOW_HEIGHT - el.offsetHeight + "px";
    
};

module.exports = adjustPaddingBottom;
