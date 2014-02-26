module.exports = function(grunt) {

    'use strict';

    //Look at the config for all the option paths
    grunt.initConfig(require('./library/grunt/configs')(grunt));

    //Automatically load grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['replace:test', 'watch']);
    grunt.registerTask('dev', ['replace:test', 'watch']);
    //used exec:watchNtest when ready to roll Karma in
    grunt.registerTask('prod', ['jshint', 'jst', 'less', 'requirejs', 'replace:build']);

};