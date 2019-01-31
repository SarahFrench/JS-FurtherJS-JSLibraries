let gulp = require('gulp');
let babel = require("gulp-babel");
let nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var log = require('gulplog');

gulp.task('build', function() {
  return gulp.src(["src/**/*.js", "!src/functions.js"]) //ignores functions.js which exists for testing only
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', log.error);
});

// gulp.task('watch-mocha', function() {
//     gulp.watch(['src/functions.js', 'test/**'], gulp.series('mocha'));
// });

gulp.task('dev', gulp.series(['mocha', 'build'], function() {
    return nodemon({
        script: 'dist/index.js',
        ext: 'js',
        ignore: ['dist/', '.git', 'node_modules/**/node_modules'],
        watch: ['src/**/*.js'],
        env: { 'NODE_ENV': 'development' },
        tasks: ['build']
    });
}));
