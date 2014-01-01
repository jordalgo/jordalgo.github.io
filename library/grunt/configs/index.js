module.exports = function(grunt) {
  return {
    pkg: grunt.file.readJSON('package.json'),
    exec: require('./exec'),
    requirejs: require('./requirejs'),
    less: require('./less'),
    jst: require('./jst'),
    jshint: require('./jshint'),
    replace: require('./replace'),
    karma: require('./karma'),
    watch: require('./watch'),
  };
};