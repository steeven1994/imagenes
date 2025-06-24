
const imagenDinamica = document.getElementById('imagenDinamica');


const rutaImagenOriginal = 'imagen/1.jpg'; 
const rutaImagenHover = 'imagen/2.jpg';   


const imgOriginal = new Image();
imgOriginal.src = rutaImagenOriginal;

const imgHover = new Image();
imgHover.src = rutaImagenHover;


imagenDinamica.addEventListener('mouseover', function() {
   
    imagenDinamica.src = rutaImagenHover;
    imagenDinamica.alt = "Imagen al pasar el ratón"; 
});


imagenDinamica.addEventListener('mouseout', function() {
    
    imagenDinamica.src = rutaImagenOriginal;
    imagenDinamica.alt = "Imagen Original"; 
});


window.onload = function() {
    imagenDinamica.src = rutaImagenOriginal;
    imagenDinamica.alt = "Imagen Original";
};