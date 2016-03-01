import gulp       from 'gulp';
import browserify from 'browserify';
import source     from 'vinyl-source-stream';
import webserver  from 'gulp-webserver';

gulp.task('build', (done) => {
  return browserify('./src/app.jsx')
    .bundle()
    .on('error', (error) => { console.error(error); })
    .pipe(source('app.bundle.js'))
    .pipe(gulp.dest('./build/'));
});

const copy_targets = ['./src/index.html', './src/style.css'];

gulp.task('watch', () => {
  gulp.watch('./src/*.jsx', ['build']);
  gulp.watch(copy_targets, ['copy']);
});

gulp.task('copy', () => {
  return gulp.src(copy_targets)
    .pipe(gulp.dest('./build/'));
});

gulp.task('webserver', function() {
  return gulp.src('./build')
    .pipe(webserver({
      host: '127.0.0.1',
      livereload: true
    }));
});

gulp.task('default', ['copy', 'build', 'watch', 'webserver']);
