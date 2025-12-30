const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

/* =====================
   COMPILAR SASS
===================== */
function sassTask() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
}

/* =====================
   COMPRIMIR JS
===================== */
function jsTask() {
  return gulp.src('js/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

/* =====================
   COMPRIMIR IMAGENS
===================== */
function imgTask() {
  return gulp.src('imagens/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

/* =====================
   TAREFA PADRÃO
===================== */
exports.default = gulp.parallel(
  sassTask,
  jsTask,
  imgTask
);
