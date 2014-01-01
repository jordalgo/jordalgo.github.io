module.exports = function(grunt) {

    'use strict';

    //Look at the config for all the option paths
    grunt.initConfig(require('./library/grunt/configs')(grunt));

    //Automatically load grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['exec:watchNtest']);
    grunt.registerTask('build', ['jshint', 'jst', 'less', 'requirejs', 'replace']);

};