const { src, dest, series, parallel, watch } = require('gulp')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')
const notify = require('gulp-notify')
const webp = require('gulp-webp')

sass.compiler = require('dart-sass');

const paths={
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss' // * carpeta actual  ** = todos los archivos     
}


function css(){
    
    return src(paths.scss)
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe( dest("./build/css"));
}

function minificarcss(){
    return src(paths.scss)
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe( dest("./build/css"));
}
function imagenes(){
    return src(paths.imagenes)
    .pipe( imagemin() )
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'imagen minificada'}))
}
function versionwebp(){
    return src(paths.imagenes)
        .pipe( webp())
        .pipe( dest('./build/img'))
        .pipe(notify({message: 'version webp lista'}))
}


function watchArchivos(){
     watch(paths.scss, css ) 
}

exports.css = css
exports.minificarcss = minificarcss
exports.imagenes = imagenes
exports.watchArchivos = watchArchivos

exports.default = series(css, imagenes,versionwebp, watchArchivos)
