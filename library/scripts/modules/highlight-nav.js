var $ = require('jQuery');

var WINDOW_HEIGHT = window.innerHeight,
  WINDOW_POS = $(window).scrollTop(),
  $COVER_IMAGE = $(".cover-image"),
  $ABOUT = $(".about-me"),
  $WORK = $(".work"),
  $CONTACT = $(".contact"),
  $TAGLINE = $(".tagline"),
  COVER_IMAGE_HEIGHT = $COVER_IMAGE.height(),
  TOP2_HEIGHT = COVER_IMAGE_HEIGHT + $ABOUT.height(),
  TOP3_HEIGHT = TOP2_HEIGHT + $WORK.height();

var highlightNav = function() {

  WINDOW_POS = $(window).scrollTop();

  $("#about-tab, #work-tab, #contact-tab").removeClass("current-section");

  if (COVER_IMAGE_HEIGHT < WINDOW_POS && WINDOW_POS < (TOP2_HEIGHT)) {
      $("#about-tab").addClass("current-section");
  }
  else if (TOP2_HEIGHT < WINDOW_POS && WINDOW_POS < TOP3_HEIGHT) {
      $("#work-tab").addClass("current-section");
  }
  else if (WINDOW_POS >= TOP3_HEIGHT) {
      $("#contact-tab").addClass("current-section");
  }
    
};

var reCalculateHeights = function() {
  COVER_IMAGE_HEIGHT = $COVER_IMAGE.height();
  TOP2_HEIGHT = COVER_IMAGE_HEIGHT + $ABOUT.height();
  TOP3_HEIGHT = TOP2_HEIGHT + $WORK.height();
};

module.exports = {
  highlightNav: highlightNav,
  reCalculateHeights: reCalculateHeights
};