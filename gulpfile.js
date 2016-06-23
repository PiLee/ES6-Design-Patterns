var gulp = require('gulp'); 
var jade = require('gulp-jade');
var plumber = require('gulp-plumber'); 
var changed = require('gulp-changed'); 
var jshint = require('gulp-jshint');
var babel = require("gulp-babel");
var browserSync =require('browser-sync').create();

// 路径变量
var path = {
    // 开发目录
    dev: 'src',
    // 发布目录
    build: './build'
};

//编译jade
gulp.task('jade:compile',function(){
    return gulp.src(path.dev+'/*.jade')
    .pipe(plumber())
    .pipe(changed(path.build,{extension:'.html'}))
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest(path.build));
});

//Wacth jade
gulp.task('jade:watch',function(){
   gulp.watch(path.dev+'/**/*.jade',['jade:compile']);
});


//编译JS
gulp.task('scripts:compile', function() {
    return gulp.src(path.dev+'/*.js')
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(changed(path.build,{extension:'.js'}))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(path.build))
});


//Watch JS
gulp.task('scripts:watch', function() {
    gulp.watch(path.dev+'/*.js',['scripts:compile']);
});



//browser-sync
gulp.task('browser-sync', function() {
    var files = [
        path.build+'/*.html',
        path.build+'/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: path.build
        },
        port:3033
    });
});


gulp.task('default', ['jade:watch','scripts:watch','browser-sync']);