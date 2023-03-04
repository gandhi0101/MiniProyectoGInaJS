
const persona = new User();
if (window.location.pathname.split('/').pop() === 'index.html') {

    const inicio = new Fondo("../media/assets/Pantalla-presentacion/fondo-presentacion.png", 0, 0, 800, 600, 'mi-canvas');
    const empezar = new Botones('', 400, 400, 300, 150, "../media/assets/Pantalla-presentacion/boton-inicio.png")
    const exit = new Botones('', 60, 50, 300, 150, "../media/assets/Pantalla-principal/exit.png")
    const logo = new Botones('', 390, 220, 200, 150, "../media/assets/Pantalla-presentacion/logo.png", 200, 200, 800, 600, 'mi-canvas');

    inicio.dibujaFondo();

    window.addEventListener('load', function () {
        logo.dibujarImg();
        empezar.dibujarImg();
        exit.dibujarImg();
    });

    exit.botonPresionado('../media/sounds/hasta_luegor.mp3', '../ingresarAlias.html')

    empezar.botonPresionado('../media/sounds/vamos_a_empezar.mp3', "../game.html")

}