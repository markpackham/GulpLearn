var gulp = require('gulp');
var sass = require('gulp-sass');

//Type in terminal in root directory "gulp firstTask"
gulp.task('firstTask', function () {
    console.log('Here is my first gulp task');
});

gulp.task('secondTask', function () {
    console.log('This is the secondTask');
});

gulp.task('sass', function () {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});