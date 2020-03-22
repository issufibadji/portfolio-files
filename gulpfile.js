const gulp = require('gulp');
const image = require('gulp-image');
const jsonminify = require('gulp-jsonminify');

gulp.task('image', () => {
  return gulp.src('./images/**')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('jsonminify', () => {
  return gulp.src(['./data/**/*.json', '!data/compress/**']) // minifica todos arquivos json de subdiretorios de data e exclui a criacao de qualquer arquivo dentro de compress que nao seja os gerados pela minificacao.
    .pipe(jsonminify())
    .pipe(gulp.dest('./data/compress'));
});
