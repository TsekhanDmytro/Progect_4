'use strict';
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const rename = require("gulp-rename");

sass.compiler = require('sass');

gulp.task('styles', () => {
  return gulp.src([
    './global/style/style.style',
    './global/style//*.style',
  ])
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .on('error', sass.logError)
      .pipe(rename({dirname: ''}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch(['global//*', 'Components/**/*'], { ignoreInitial: false }, gulp.series(['styles']));
});