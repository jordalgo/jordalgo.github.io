var gulp = require('gulp')
  , path = require('path')
  , plugins = require('gulp-load-plugins')()
  , browserifyHandlebars = require('browserify-handlebars')
  , browserSync = require('browser-sync')

  , CSS_PATH = './library/style/css/'

  , argv = require('yargs').argv
  ;

gulp.task('less', function() {
  return gulp.src('./library/style/less/style.less')
    .pipe(plugins.less({
      generateSourceMap: true, // default true
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(CSS_PATH))
    ;
});

gulp.task('minify-css', ['less'], function() {
  return gulp.src(CSS_PATH + 'style.css')
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(CSS_PATH))
    ;
});

gulp.task('jshint', function() {
  console.log(argv);
  return gulp.src('./library/scripts/modules/**/*.js')
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('templates', function(){
  return gulp.src(['./library/scripts/templates/*.hbs'])
    .pipe(plugins.handlebars())
    .pipe(plugins.defineModule('commonjs'))
    .pipe(gulp.dest('./library/scripts/templates/'))
    ;
});

gulp.task('e6to5', function () {
  return gulp.src('./library/scripts/modules/*.js')
    .pipe(plugins['6to5']())
    .pipe(gulp.dest('./library/scripts/es5/'))
    ;
});

gulp.task('browserify', ['e6to5'], function() {
  return gulp.src('./library/scripts/es5/main.js')
    .pipe(plugins.browserify({
      transform: [browserifyHandlebars],
      shim: {
        jQuery: {
          path: 'library/scripts/vendor/jquery.min.js',
          exports: '$'
        }
      }
    }))
    .pipe(gulp.dest('./library/scripts/build/'))
    ;
});

gulp.task('uglify', ['browserify'], function() {
  return gulp.src('./library/scripts/build/main.js')
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./library/scripts/build/'))
    ;
});

gulp.task('watch', function() {
  gulp.watch('./library/scripts/modules/*.js', ['jshint', 'browserify', browserSync.reload]);
  gulp.watch('./library/style/less/**/*.less', ['less', browserSync.reload]);
  gulp.watch('./library/scripts/templates/*.hbs', ['browserify', browserSync.reload]);
  gulp.watch('./index.html', [browserSync.reload]);
});

gulp.task('browser-sync', function () {
   browserSync({
      server: {
         baseDir: './'
      }
   });
});

gulp.task('git', function(){
  return gulp.src('.')
    .pipe(plugins.git.add({args: '--all'}))
    .pipe(plugins.git.commit(argv.commit))
    ;
});

gulp.task(
  'default',
  [
    'less'
    , 'jshint'
    , 'browserify'
    , 'watch'
    , 'browser-sync'
  ]
);

gulp.task(
  'deploy',
  [
    'minify-css'
    , 'jshint'
    , 'uglify'
  ],
  function() {
    gulp.start('git');
  }
);

