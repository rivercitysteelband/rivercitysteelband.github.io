var gulp = require('gulp'),
	// jshint = require('gulp-jshint'),
	changed = require('gulp-changed'),
	// imagemin = require('gulp-imagemin'),
	// minifyHTML = require('gulp-minify-html'),
	concat = require('gulp-concat'),
	stripDebug = require('gulp-strip-debug'),
	uglify = require('gulp-uglify'),
	autoprefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	// sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');
	// del = require('del');

gulp.task('default', ['scripts'], () => {
	gulp.watch('js/*.js', ['scripts']);
});
    
// gulp.task('clean', function() {
//   // You can use multiple globbing patterns as you would with `gulp.src`
//   return del(['build']);
// });
    
// JS hint task
// gulp.task('jshint', () => {
//   gulp.src()
//     .pipe(jshint(jsSrc))
//     .pipe(jshint.reporter('default'));
// });

// // minify new images
// gulp.task('imagemin', () => {  
//   gulp.src(imgSrc)
//     .pipe(changed(imgDst))
//     .pipe(imagemin())
//     .pipe(gulp.dest(imgDst));
// });

// minify new or changed HTML pages
// gulp.task('htmlpage', () => {  
//   gulp.src(htmlSrc)
//     .pipe(changed(htmlDst))
//     .pipe(minifyHTML())
//     .pipe(gulp.dest(htmlDst));
// });
 
// gulp.task('sass', function () {
//   gulp.src(sassSrc)
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest(sassDst));
// });

gulp.task('scripts', () => {
	gulp.src(['js/jquery.min.js', 'jquery.flexslider-min.js', 'js/*.js'])
	.pipe(sourcemaps.init())
	.pipe(concat('all-scripts.js'))
	.pipe(stripDebug())
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./'))
} )

// CSS concat, auto-prefix and minify
// gulp.task('styles', function() {
//   gulp.src(cssSrc)
//     .pipe(concat('styles.css'))
//     .pipe(autoprefix('last 2 versions'))
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('./build/styles/'));
// });