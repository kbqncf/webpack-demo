var gulp = require('gulp');
var spawn = require('child_process').spawn;//利用child_process来启动node子线程
//运行webpack
gulp.task('wp', function () {
    "use strict";
    spawn('webpack');
});