let gulp = require('gulp');
let babel = require("gulp-babel");
let nodemon = require('gulp-nodemon');

gulp.task('build', function() {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('dev', gulp.series('build', function() {
    return nodemon({
        script: 'dist/index.js',
        ext: 'js',
        ignore: ['dist/', '.git', 'node_modules/**/node_modules'],
        watch: ['src/**/*.js'],
        env: { 'NODE_ENV': 'development' },
        tasks: ['build']
    });
}));
