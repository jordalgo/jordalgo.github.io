module.exports = (grunt) ->

  deploy = grunt.option 'deploy'

  replaceFiles =
    src: ['index.html']
    dest: 'index.html' 

  browerifySrc = 'library/scripts/main.js'
  browerifyDest = 'library/scripts/build/main.js'
  shim = 
    jQuery:
      path: 'library/scripts/vendor/jquery.min.js'
      exports: '$'

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    less:
      main:
        options:
          paths: ['library/style/less']
          dumpLineNumbers: !deploy
          sourceMap: !deploy
          compress: deploy
          outputSourceFiles: !deploy
          sourceMapFilename: 'library/style/css/style.css.map'
          sourceMapBasepath: 'library/style/css/'
        files:
          'library/style/css/style.css': 'library/style/less/style.less'

    jshint:
      options:
        globals:
            jQuery: true
            console: true
            module: true
            document: true
      main:
        files:
          src: ['library/scripts/modules/**/*.js', 'library/scripts/main.js']

    replace:
      prod:
        options:
          patterns: [
            {
              match: '<script src="http://localhost:35729/livereload.js"></script>'
              replacement: '<!--livereload-->'
            }
          ]
          usePrefix: false
        files: [replaceFiles]
      dev:
        options:
          patterns: [
            {
              match: '<!--livereload-->'
              replacement: '<script src="http://localhost:35729/livereload.js"></script>'
            }
          ]
          usePrefix: false
        files: [replaceFiles]

    browserify:
      main:
        src: browerifySrc
        dest: browerifyDest
        options:
          debug: !deploy
          shim: shim

    exec:
      gitpush:
        cmd: 'git push all master'

    handlebars:
      compile:
        options:
          namespace: 'JST'
          commonjs: true
        files:
          'library/scripts/templates/work.js': 'library/scripts/templates/*.hbs'

    uglify:
      main:
        files:
          'library/scripts/build/main.js': ['library/scripts/build/main.js']

    watch:
      options:
        livereload: true
      javascript:
          files: [
            'library/scripts/**/*.js'
            '!library/scripts/vendor/*.js'
            '!library/scripts/templates/*.js'
            '!library/scripts/build/*.js'
          ]
          tasks: ['jshint:main']
      browserify:
        files: [
          'library/scripts/**/*.js'
          '!library/scripts/vendor/*.js'
          '!library/scripts/build/*.js'
        ]
        tasks: ['browserify']
      templates:
        files: ['library/scripts/templates/*.hbs']
        tasks: ['handlebars']
      style:
        files: ['library/style/**/*.less']
        tasks: ['less']
      html:
        files: ['index.html']
        tasks: []

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.registerTask 'default', 'build the files', () ->

    ext = if deploy then 'prod' else 'dev'

    tasks = [
      'replace:' + ext
      'handlebars'
      'jshint'
      'less'
      'browserify'
    ]

    if deploy
      tasks.push 'uglify'
    else
      tasks.push 'watch'

    grunt.task.run tasks
