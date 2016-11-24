
const template = require('../templates/work.hbs');

import WORK_DATA from './work';
import { reCalculateHeights } from './highlight-nav';

export default el => {
  let workSet = '';

  WORK_DATA.forEach(work => {
    workSet += template({site: work });
  });

  el.innerHTML = workSet; //add the work
  document.querySelector('#more-work').remove();

  reCalculateHeights();

};

