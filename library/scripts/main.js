var $ = require('jQuery');
var setEventListeners = require('./modules/event-listeners');
var adjustPaddingBottom = require('./modules/adjust-padding-bottom');
var loadWork = require('./modules/load-work');
var forEach = require('mout/array/forEach');
var kindOf = require('mout/lang/kindOf');


var compareObjects = function(a,b) {

  for (var key in a){
    if (!b[key]){
      return false;
    }

    if (!isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;

};

var isEqual = function(a, b) {

  if (a === b) {
    return true;
  }

  var atype = kindOf(a)
    , btype = kindOf(b)
  ;

  console.log(kindOf(a));
  console.log(kindOf(b));

  if (atype !== btype) {
    return false;
  }

  if (atype === 'Function' || atype === 'Boolean' || atype === 'String' || atype === 'Number' || a === 'Undefined' || a === 'Null'){
    return false;
  }

  if (atype === 'Array' && !compareArrays(a,b)) {
    return false;
  } else if (atype === 'Object' && !compareObjects(a,b)) {
    return false;
  }

  return true;

};

var compareArrays = function(a, b) {

  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }

  for (var i = 0, j = a.length; i < j; i++){
    if (!isEqual(a[i], b[i])) return false;
  }
  return true;
};

var heavy = function(){

  var total = 0;

  for (var i = 0; i < 1000000000; i++){
    total = total + i;
  }

  console.log(total);

};

var go = function(){

  console.time('start');

  heavy();

  setTimeout(function(){
    console.log('timeout fn caled');
    console.timeEnd('start');
  }, 0);



};



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

  setTimeout(function(){
    go();
  }, 1500);


  console.log(compareArrays([function(){console.log('me');}],[function(){console.log('me');}]));
 
});