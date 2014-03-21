module.exports = function(grunt) {
  grunt.registerTask(
    'prod',
    'The default grunt task for development',
    [
      'jshint',
      'handlebars',
      'less',
      'browserify:prod',
      'uglify'
    ]
  );
};