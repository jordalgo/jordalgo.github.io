import $ from 'jquery';

import setEventListeners from './event-listeners';
import adjustPaddingBottom from './adjust-padding-bottom';
import validateForm from './validate_form';

$(document).ready(function() {

  let WINDOW_WIDTH = $(window).width(),
    elContact = document.querySelector('.contact');

    setEventListeners();
    validateForm();

  //tablet or bigger
  if (WINDOW_WIDTH > 750) {
      adjustPaddingBottom(elContact);
  }

});

