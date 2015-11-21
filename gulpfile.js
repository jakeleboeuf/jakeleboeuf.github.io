var autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    eslint = require('gulp-eslint'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    shell = require('gulp-shell'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    gulp = require('gulp');

// Task for building blog when something changed:
gulp.task('build', shell.task(['jekyll build --config _config.yml,_config.dev.yml  --watch']));


gulp.task('watch', function(){
  // Browser Sync Init
  browserSync.init({
    server: {
      baseDir: '_site/'
    }
  });

  // Things to watch
  gulp.watch('_site/**/*').on('change', function(file) {
    browserSync.reload();
  });

  gulp.watch("_js/**/*.js", ['lint', 'js']);   // Watch and run javascripts on changes
});


// ES lint
gulp.task('lint', function() {
  return gulp.src('_js/**/*.js')
    .pipe(eslint({
      rules: {
        'quotes': 0,
        'no-multi-spaces': [
          1, {
            'exceptions': {
              'VariableDeclarator': true
            }
          }
        ]
      },
      globals: {
        'jQuery':            false,
        '$':                 true,
        'imagesLoaded':      false,
        'Modernizr':         false,
        'Handlebars':        false
      },
      envs: [
        'browser'
      ]
    }))
    .pipe(eslint.format());
});

// Scripts
gulp.task('js', function(){
  return gulp.src([
      '_js/plugins/**/*.js',
      '_js/*.js'
    ])
    // Create the Dev version
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js/'))
    // Create the Production version
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .on('error', handleError)
    .pipe(gulp.dest('./js/'))
    // Reload
    .pipe(browserSync.reload({stream:true, once: true}));
});

// Handle errors
function handleError (error) {
  //If you want details of the error in the console
  console.log('WARNING!', error.message.toString());
  this.emit('end');
}


// Default Task
gulp.task('default', ['js', 'build', 'watch']);
