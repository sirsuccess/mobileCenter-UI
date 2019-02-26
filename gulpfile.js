const { src, dest, task, watch, parallel } = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-csso');
const browsersync = require ('browser-sync').create();


function css() {
   return src('css/*.css')
       .pipe(minifyCSS())
       .pipe(rename(function(path){
          path.extname= '.min.css';
       }))
       .pipe(dest('build/css'));
}
function js() {
 return src('js/*.js')
   .pipe(concat('scripts.js'))
   .pipe(dest('build/scripts'))
   .pipe(rename('scripts.min.js'))
   .pipe(terser())
   .pipe(dest('build/scripts'));
};

exports.default = parallel(css,js,);