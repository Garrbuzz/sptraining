
const gulp = require('gulp')
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

function cssP() {
	return gulp.src('./source/css/style.scss')
		.pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }).on('error', sass.logError))
		.pipe(debug({title: 'sass: '}))
		.pipe(sourcemaps.write())
		.pipe(debug({title: 'sourcemap: '}))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({level:2}))
		.pipe(gulp.dest('./www/css'))
		.pipe(debug({title: 'Копіювання css: '}))
		.pipe(browserSync.stream());
}
function cssD() {
	return gulp.src('./source/css/style.scss')
		.pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }).on('error', sass.logError))
		.pipe(debug({title: 'sass: '}))
		.pipe(sourcemaps.write())
		.pipe(debug({title: 'sourcemap: '}))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./www/css'))
		.pipe(debug({title: 'Копіювання css: '}))
		.pipe(browserSync.stream());
}

function jsD() {
	return gulp.src('./source/js/**/*.js')
		.pipe(gulp.dest('./www/js'))
		pipe(browserSync.stream());
}
function jsP() {
	return gulp.src('./source/js/**/*.js')
		.pipe(gulp.dest('./www/js'))
		.pipe(browserSync.stream());
}
function html() {
	return gulp.src('./source/html/**/*.html')
		.pipe(gulp.dest('./www'))
		.pipe(browserSync.stream());
}
function php() {
	return gulp.src('./source/php/**/*.php')
		.pipe(gulp.dest('./www/php'))
}
function img() {
	return gulp.src('./source/img/**/*.*')
	.pipe(imagemin())
		.pipe(gulp.dest('./www/img'))
}
function cleanDest() {
	return gulp.src('./www', {read: false})
		.pipe(clean({force: true}));
}
function watch(){
	browserSync.init({
        
            proxy:'sptraining'
            // server:{
            // 	baseDir:'../../OpServ/OSPanel/domains/imla'
            // }
        
    });
    gulp.watch('./source/img/**/*.*', gulp.series('img'))
    gulp.watch('./source/php/**/*.php', gulp.series('php'))
    gulp.watch('./source/html/**/*.html', gulp.series('html'))
    gulp.watch('./source/css/**/*.scss', gulp.series('cssD'))
	gulp.watch('./source/js/**/*.js', gulp.series('jsD'))

}
gulp.task('cssD', cssD);
gulp.task('cssP', cssP);
gulp.task('jsP', jsP);
gulp.task('jsD', jsD);
gulp.task('html', html);
gulp.task('php', php);
gulp.task('img', img);
gulp.task('clean', cleanDest);
gulp.task('watch', watch);
gulp.task('d', gulp.series('clean', 'cssD', 'jsD', 'php', 'html', 'img', 'watch'))
gulp.task('p', gulp.series('clean', gulp.parallel('cssP', 'jsP', 'php', 'html', 'img')))
gulp.task('dx', gulp.series('clean', gulp.parallel('cssD', 'jsD', 'php', 'html', 'img')))
