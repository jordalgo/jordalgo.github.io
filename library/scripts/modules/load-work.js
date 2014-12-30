
const Handlebars = require('handlebars/runtime').default
  , TEMPLATES = require('../templates/work')(Handlebars)
  , WORK_TEMPLATE = TEMPLATES['library/scripts/templates/work.hbs']
  ;

import WORK_DATA from './work';
import highlightNav from './highlight-nav';

export default el => {
  let workSet = '';

  WORK_DATA.forEach(work => {
    workSet += WORK_TEMPLATE({site: work });
  });

  el.innerHTML = workSet; //add the work
  document.querySelector('#more-work').remove();

  highlightNav.reCalculateHeights();

};

