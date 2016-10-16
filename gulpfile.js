'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')(); //lazy load some of gulp plugins

const fs = require('fs');
const spritesmith = require('gulp.spritesmith');
const revHash = require('rev-hash');
const del = require('del');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const devMode = process.env.NODE_ENV || 'development';

const destFolder = devMode === 'development' ? 'development' : 'production';

// STYLES
gulp.task('sass', function () {

	return gulp.src('src/sass/style.scss')
		.pipe($.if(devMode !== 'production', $.sourcemaps.init())) 
		.pipe($.sass({outputStyle: 'expanded'})) 
		.on('error', $.notify.onError())
		.pipe($.autoprefixer({
			browsers: ['> 1%'],
			cascade: false
		}))
		.pipe($.cssImageDimensions())
		.on('error', $.notify.onError())
		.pipe($.if(devMode !== 'production', $.sourcemaps.write())) 
		.pipe(gulp.dest(destFolder + '/assets/css'));  
});


// ASSETS
gulp.task('assets-files', function(){
	return gulp.src(['src/assets/**/*.*', '!src/assets/sprite/*.*', '!src/assets/favicon.ico'], {since: gulp.lastRun('assets-files')})
		.pipe($.newer(destFolder + '/assets'))
		.pipe(gulp.dest(destFolder + '/assets'))
});
gulp.task('assets-favicon', function(){
	return gulp.src('src/assets/favicon.ico', {since: gulp.lastRun('assets-favicon')})
		.pipe($.newer(destFolder))
		.pipe(gulp.dest(destFolder))
});
gulp.task('sprite', function(callback) {

	const spriteData = 
		gulp.src('src/assets/sprite/*.png') // путь, откуда берем картинки для спрайта
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: '_sprites.scss',
			imgPath: '../images/sprite.png'
		}))
		.on('error', $.notify.onError())
		

	spriteData.img
		.pipe(gulp.dest(destFolder + '/assets/images/'))

	spriteData.css.pipe(gulp.dest('src/sass/'))
	.on('end', callback);

});
gulp.task('assets', gulp.parallel('assets-files', 'assets-favicon', 'sprite'));


// HTML
gulp.task('html', function(callback){

	const files = [
		'src/html/*.html'
	];

	return gulp.src(files)
	.pipe($.fileInclude({
		prefix: '@@',
		basepath: '@file',
		context: {
			devMode: devMode,
		},
		indent: true
	}))
	.on('error', $.notify.onError())
	.pipe($.if(devMode === 'production', $.htmlmin({collapseWhitespace: true})))
	.pipe(gulp.dest(destFolder));

});


gulp.task('webpack-server', function(callback) {
	var config = require('./webpack.config.js');

	var WebpackDevServer = require('webpack-dev-server');
	
	new WebpackDevServer(webpack(config), {
	  	contentBase: config.output.path,
	  	publicPath: config.output.publicPath,
	  	hot: true,
	  	historyApiFallback: true,
	}).listen(3000, 'localhost', function (err, result) {
	  if (err) {
	    return console.log(err);
	  }
	  console.log('Listening HOT-reload server at http://localhost:3000/');
	});

});

// BUILD
gulp.task('server', function () {
	gulp.src(destFolder)
	.pipe($.serverLivereload({
		livereload: true,
		directoryListing: false,
		open: false,
		port: 9000
	}));
	
	gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('src/assets/**/*', gulp.series('assets'));
	gulp.watch('src/html/**/*.html', gulp.series('html'));

});


gulp.task('clean', function() {
	return del([destFolder]);
});

gulp.task('build', gulp.series('assets', 'sass', 'html'));


// run prod and hot-reload servers
gulp.task('servers', gulp.parallel('webpack-server', 'server'));

gulp.task('default', gulp.series('clean', 'build', 'servers'));



