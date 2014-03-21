var WORK_DATA = require('../data/work');
var Handlebars = require('handlebars/runtime').default;
var TEMPLATES = require('../templates/work')(Handlebars);
var WORK_TEMPLATE = TEMPLATES['library/scripts/templates/work.hbs'];
var highlightNav = require('./highlight-nav');

function loadWork(el){

  var w = 0,
    max = WORK_DATA.length,
    workSet = '';

  for (; w < max; w++) {
    workSet += WORK_TEMPLATE({site: WORK_DATA[w]});
  }

  el.innerHTML = workSet; //add the work
  document.querySelector('#more-work').remove();

  highlightNav.reCalculateHeights();

}

module.exports = loadWork;
