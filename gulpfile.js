const { src, dest, series, parallel, watch } = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('dart-sass');


function css( done ){
    
    return src("src/scss/app.scss")
    .pipe(sass())
    .pipe( dest("./build/css"));
}
 function javascript(done){
     console.log('compilando Javascript...');
     done();
 }

 function minificarcss(){
    return src("src/scss/app.scss")
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe( dest("./build/css"));
 }

 function watchArchivos(){
     watch("src/scss/**/*.scss", css ) // * carpeta actual  ** = todos los archivos
     
 }

exports.css = css
exports.javascript = javascript
exports.minificarcss = minificarcss
exports.watchArchivos = watchArchivos
exports.default = parallel( css, javascript)
