var gulp = require('gulp');
var fileinclude = require('gulp-file-include');//
var spawn = require('child_process').spawn;//利用child_process来启动node子线程
//编译html文件，对模块文件进行替换
gulp.task('fileinclude', function () {
    gulp.src(['./src/html_tpl/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./src/html'));
});
gulp.task('watch', function () {
    gulp.watch('src/html_tpl/**/*.html', ['fileinclude']);
});
//运行webpack
gulp.task('wp', function () {
    spawn('webpack');//启动webpack编译
    // spawn('webpack-dev-server', ['--hot', '--inline']);//启动webpack本地部署
    // spawn('gulp', ['watch']);//启动gulp watch任务
});