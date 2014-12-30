
const TEMPLATE = require('../templates/work.hbs');

import WORK_DATA from './work';
import highlightNav from './highlight-nav';

export default el => {
  let workSet = '';

  WORK_DATA.forEach(work => {
    workSet += TEMPLATE({site: work });
  });

  el.innerHTML = workSet; //add the work
  document.querySelector('#more-work').remove();

  highlightNav.reCalculateHeights();

};

