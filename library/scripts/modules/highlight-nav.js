var $ = require('jquery');

const $COVER_IMAGE = $('.cover-image')
  , $ABOUT = $('.about-me')
  , $WORK = $('.work')
  ;

let WINDOW_POS = $(window).scrollTop()
  , COVER_IMAGE_HEIGHT = $COVER_IMAGE.height()
  , TOP2_HEIGHT = COVER_IMAGE_HEIGHT + $ABOUT.height()
  , TOP3_HEIGHT = TOP2_HEIGHT + $WORK.height()
  ;

export function highlightNav() {

  WINDOW_POS = $(window).scrollTop();

  $('#about-tab, #work-tab, #contact-tab').removeClass('current-section');

  if (COVER_IMAGE_HEIGHT < WINDOW_POS && WINDOW_POS < (TOP2_HEIGHT)) {
      $('#about-tab').addClass('current-section');
  } else if (TOP2_HEIGHT < WINDOW_POS && WINDOW_POS < TOP3_HEIGHT) {
      $('#work-tab').addClass('current-section');
  } else if (WINDOW_POS >= TOP3_HEIGHT) {
      $('#contact-tab').addClass('current-section');
  }

};

export function reCalculateHeights() {
  COVER_IMAGE_HEIGHT = $COVER_IMAGE.height();
  TOP2_HEIGHT = COVER_IMAGE_HEIGHT + $ABOUT.height();
  TOP3_HEIGHT = TOP2_HEIGHT + $WORK.height();
};

