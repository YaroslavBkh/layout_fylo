"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const input = 'page/style.scss';
const output = 'page/';


gulp.task('sass', function() {
	return gulp.src(input)
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 99 versions'],
		cascade: false
}))
	.pipe(gulp.dest(output));
});

gulp.task('sass:watch', function() {
  gulp.watch('page/style.scss', gulp.series('sass'));
})