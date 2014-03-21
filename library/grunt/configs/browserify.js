// shared objects
var src = 'library/scripts/main.js';
var dest = 'library/scripts/build/main.js';
var shim = {
  jQuery: {
    path: 'library/scripts/vendor/jquery-1.8.1.min.js',
    exports: '$'
  }
};

module.exports = {
  dev: {
    src: src,
    dest: dest,
    options: {
      debug: true,
      shim: shim
    }
  },
  prod: {
    src: src,
    dest: dest,
    options: {
      shim: shim
    }
  },
};