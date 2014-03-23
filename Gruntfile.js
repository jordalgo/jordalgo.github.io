module.exports = function(grunt) {

    'use strict';

    //Look at the config for all the option paths
    grunt.initConfig(require('./library/grunt/configs')(grunt));

    //Automatically load grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // run to develop 
    grunt.registerTask(
      'default',
      [
        'replace:dev',
        'watch'
      ]
    );

    // run before publishing
    grunt.registerTask(
      'prod',
      [
        'jshint',
        'handlebars',
        'less',
        'replace:prod',
        'replace:removeconsole', 
        'browserify:prod',
        'uglify'
      ]
    );

    // run to publish
    grunt.registerTask(
      'publish',
      [
        'jshint',
        'handlebars',
        'less',
        'replace:prod',
        'replace:removeconsole', 
        'browserify:prod',
        'uglify',
        'exec'
      ]
    );

};
