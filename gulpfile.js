const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('scss/app.scss')
    .pipe(sass())
    .pipe(dest('build/css/'));
}

const buildPug = () => {
  console.log('Компиляция Pug');

  return src("pug/index.pug")
    .pipe(pug({pretty: true}))
    .pipe(pug())
    .pipe(dest('build/'));
}

exports.build = parallel(buildSass, buildPug);