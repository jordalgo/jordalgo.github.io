let $ = require('jQuery');

import adjustPaddingBottom from './adjust-padding-bottom';
import loadWork from './load-work';
import { highlightNav, reCalculateHeights } from './highlight-nav';

export default () => {

    let userScrolled = false
      , resize = {}
      ;

    $('a[href*="#"]').click((e) => {
    let location = window.location
      , target = (e.target.nodeName === 'SPAN') ? e.target.parentElement : e.target
      ;
    if (location.pathname.replace(/^\//,'') === target.pathname.replace(/^\//,'') && location.hostname === target.hostname) {
            var $target = $(target.hash);
            $target = $target.length && $target || $('[name=' + target.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = Math.ceil($target.offset().top);
                $('html,body').animate({scrollTop: targetOffset}, 1500);
                return false;
            }
            return true;
    }
    return true;
    });

    $('#mobile-social-button').click(() => {
        if (!$('.mobile-social-tab').length) {
            $('<div id=\'ms-container\'><div class=\'mobile-social-tab\'>' + $('.social-tab').html() + '</div></div>').prependTo('.access');
            $('.mobile-social-tab').hide(0);
        }
        $('.mobile-social-tab').toggle('slow');
        $('.social-icons').css({ 'opacity' : 0 }).animate({ 'opacity' : 1}, 2000);


    });

    $('#more-work').click(() => {
        loadWork(document.querySelector('.work-site-container'));
    });

    $(window).scroll(() => {
        userScrolled = true;
    });

    $(window).resize(() => {
        clearTimeout(resize);
        resize = setTimeout(() => {
            reCalculateHeights();
            adjustPaddingBottom($('.contact'));
        }, 500);
    });

    //set scroll check interval
    setInterval(() => {
        if (userScrolled) {
            userScrolled = false;
            highlightNav();
        }
    }, 250);

};

