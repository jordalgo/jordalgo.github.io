var gulp = require('gulp')
  , path = require('path')
  , plugins = require('gulp-load-plugins')()
  , browserifyHandlebars = require('browserify-handlebars')
  , browserSync = require('browser-sync')

  , CSS_PATH = './library/style/css/'
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
  gulp.watch('./library/scripts/modules/*.js', ['jshint', 'browserify']);
  gulp.watch('./library/style/less/**/*.less', ['less']);
  gulp.watch('./library/scripts/templates/*.hbs', ['browserify']);
});


gulp.task('browser-sync', function () {
   var files = [
      './*.html',
      './library/scripts/modules/*.js',
      './library/style/css/*.css',
      './library/scripts/templates/*.hbs'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
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
  ]
);

