module.exports = function(grunt) {
  grunt.registerTask(
    'default',
    'The default grunt task for development',
    [
      'replace:dev',
      'watch'
    ]
  );
};