var $ = require('jQuery');
var setEventListeners = require('./modules/event-listeners');
var adjustPaddingBottom = require('./modules/adjust-padding-bottom');
var loadWork = require('./modules/load-work');


$(document).ready(function(){

  var WINDOW_WIDTH = $(window).width(),
    elWorkContainer = document.querySelector('.work-site-container'),
    elContact = document.querySelector('.contact');

  setEventListeners();

  //tablet or bigger
  if (WINDOW_WIDTH > 750) {
      adjustPaddingBottom(elContact);
  }

  //desktop - assume wifi or better
  if (WINDOW_WIDTH > 979) {
     loadWork(elWorkContainer);
  }

  //fade in the page
  $('.yes-js').animate({ 'opacity' : 1}, 2000);


});