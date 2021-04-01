const { src, dest } = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('dart-sass');


function css(){
    
    return src("./src/scss/app.scss")
    .pipe(sass())
    .pipe( dest("./build/css"));
}


exports.css = css
