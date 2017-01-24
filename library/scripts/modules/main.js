let $ = require('jquery');

import setEventListeners from './event-listeners';
import adjustPaddingBottom from './adjust-padding-bottom';
import loadWork from './load-work';
import validateForm from './validate_form';

$(document).ready(function() {

  let WINDOW_WIDTH = $(window).width(),
    elWorkContainer = document.querySelector('.work-site-container'),
    elContact = document.querySelector('.contact');

    setEventListeners();
    validateForm();

  //tablet or bigger
  if (WINDOW_WIDTH > 750) {
      adjustPaddingBottom(elContact);
  }

  //desktop - assume wifi or better
  if (WINDOW_WIDTH > 979) {
     loadWork(elWorkContainer);
  }

});

