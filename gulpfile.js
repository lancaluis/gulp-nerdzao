// Criação das variáveis: chamando o gulp e os plugins utilizados no projeto
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-clean-css');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const runSequence = require('run-sequence');

// Tarefa padrão
gulp.task('default', function(){
    return runSequence('limpar', ['minificar-css', 'minificar-imgs']);
})

// gulp-clean
gulp.task('limpar', function () {
    return gulp.src('dist/')
    .pipe(clean());
});

// gulp-clean-css
gulp.task('minificar-css', function(){
    return gulp.src(['css/elements.css', 'css/parallax.css', 'css/style.css'])
    .pipe(cssmin())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/css/'));
});

// gulp-imagemin
gulp.task('minificar-imgs', function(){
    return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img/'))
});

