module.exports = function(grunt) {

    'use strict';

    //Look at the config for all the option paths
    grunt.initConfig(require('./library/grunt/configs')(grunt));

    //Automatically load grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Load our custom grunt tasks.
    grunt.loadTasks('./library/grunt/tasks');

};
