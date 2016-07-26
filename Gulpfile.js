var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var concat      = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('assets/scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 2%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('./'));
});

gulp.task('scripts', function(){
    return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('browserSync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('assets/scss/*.scss', ['sass']);
    gulp.watch('assets/js/*.js', ['scripts']);
    gulp.watch('*.html', ['bs-reload']);
});

gulp.task('default', ['browserSync', 'watch']);
