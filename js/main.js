const persona = new User;
if(window.location.pathname.split('/').pop() === 'index.html'){
    
const inicio = new Fondo("../media/assets/Pantalla-presentacion/fondo-presentacion.png", 0, 0, 800, 600, 'mi-canvas');
const empezar = new Botones('', 400, 300, 300, 150, "../media/assets/Pantalla-presentacion/boton-inicio.png")
const exit = new Botones('', 60, 50, 300, 150, "../media/assets/Pantalla-principal/exit.png")

//
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
inicio.dibujaFondo();
setTimeout(function () {
    empezar.dibujarImg();
    exit.dibujarImg();
}, 150);
exit.botonPresionado('../media/sounds/hasta_luegor.mp3', '../ingresarAlias.html')

empezar.botonPresionado('../media/sounds/vamos_a_empezar.mp3',"../game.html")

}