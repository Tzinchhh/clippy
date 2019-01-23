var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('task-name', function() {

});

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/style.scss', gulp.series('sass'));
});