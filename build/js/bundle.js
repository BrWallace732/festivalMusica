document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    navegacionFija();
});

function navegacionFija(){

    const barra = document.querySelector('.header');


    //registrar el intersection observer
    const observer = new IntersectionObserver( function(entries){
        console.log(entries[0]);
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');        
        }else{
            barra.classList.add('fijo');
        }
    });

    
    //elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));

}


function scrollNav(){
    const  enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth' 
            });
        });
    });

}
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i<=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //añadir funcion para mostrar imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
        
    }

}

function mostrarImagen(e){
    const id = parseInt( e.target.dataset.imagenId)

    //generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //cuando da click afuera cerrar imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    //boton para cerra imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X'
    cerrarImagen.classList.add('btn-cerrar');
    //funcion de cerrar la imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);

    //mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
    
}