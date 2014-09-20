var $ = require('jQuery');
var adjustPaddingBottom = require('./adjust-padding-bottom');
var loadWork = require('./load-work');
var highlightNav = require('./highlight-nav');

function setEventListeners() {

    var userScrolled = false,
        resize = {};

    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = Math.ceil($target.offset().top);
                $('html,body').animate({scrollTop: targetOffset}, 1500);
                return false;
            }
        }
    });

    $("#mobile-social-button").click(function() {
        if (!$(".mobile-social-tab").length) {
            $("<div id=\"ms-container\"><div class=\"mobile-social-tab\">" + $(".social-tab").html() + "</div></div>").prependTo(".access");
            $(".mobile-social-tab").hide(0);    
        }
        $(".mobile-social-tab").toggle("slow");
        $('.social-icons').css({ "opacity" : 0 }).animate({ 'opacity' : 1}, 2000);


    });

    $(".input").focus(function() {
        var val = $(this).val(), defaultVal = $(this).attr("data-default");
        if (val === defaultVal) { $(this).val(''); }
    });

    $(".input").blur(function() {
        var val = $(this).val(), defaultVal = $(this).attr("data-default");
        if (val === '') { $(this).val(defaultVal); }
    });

    // $("#send-button").click(function(e) {
    //     e.preventDefault();
    //     return validateForm();
    // });

    $("#more-work").click(function() { 
        loadWork(document.querySelector('.work-site-container'));
    });

    $(window).scroll(function () { 
        userScrolled = true;
    });

    $(window).resize(function() {
        clearTimeout(resize);
        resize = setTimeout(function(){
            highlightNav.reCalculateHeights();
            adjustPaddingBottom($('.contact'));
        }, 500);
    });

    //set scroll check interval
    setInterval(function() {
        if (userScrolled) {
            userScrolled = false;
            highlightNav.highlightNav();
        }
    }, 250);

}

module.exports = setEventListeners;