const { src, dest,series, parallel } = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('dart-sass');


function css( done ){
    
    return src("./src/scss/app.scss")
    .pipe(sass())
    .pipe( dest("./build/css"));
}
 function javascript(done){
     console.log('compilando Javascript...');
     done();
 }

exports.css = css
exports.javascript = javascript
exports.default = parallel( css, javascript)
