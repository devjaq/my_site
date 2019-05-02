'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./app/styles/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./app/styles/'))
      .pipe(gulp.dest('./dist/styles/'))
  });

  gulp.task('exportJS', function () {
    return gulp.src(['./app/scripts/**/*.js'])
    .pipe(gulp.dest('./dist/scripts/'))
  })

  gulp.task('export', function () {
    return gulp.src(['./app/**/*.html'])
      .pipe(gulp.dest('./dist/'))
  });

//   gulp.task('serve', function() {

//     browserSync.init({
//         server: "./app"
//     });

//     gulp.watch('./app/styles/*.scss', gulp.series('sass'));
//     gulp.watch("app/*.html").on('change', browserSync.reload);
// });
   
gulp.task('sass:watch', function () {
  gulp.watch(['./app/styles/*.scss','.app/*.html'], gulp.series('sass','export'));
});
gulp.task('all:watch', function () {
  gulp.watch(['./app/styles/*.scss','./app/**/*.html','./app/scripts/**/*.js'], gulp.series('sass','export'));
});