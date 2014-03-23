module.exports = function(grunt) {
  return {
    pkg: grunt.file.readJSON('package.json'),
    less: require('./less'),
    jshint: require('./jshint'),
    replace: require('./replace'),
    browserify: require('./browserify'),
    watch: require('./watch'),
    handlebars: require('./handlebars'),
    uglify: require('./uglify'),
    exec: require('./exec')
  };
};