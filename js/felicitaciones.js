const felicitacion = new Fondo("../media/assets/Pantalla-felicitaciones/fondo-felicitaciones.png", 0, 0, 800, 600, 'mi-canvas-felici');
const letreroWin  = new Botones('', 410, 310, 300, 150, "../media/assets/Pantalla-felicitaciones/win.png");


felicitacion.dibujaFondo();

setTimeout(function () {
    letreroWin.dibujarImg();
}, 150);



exit.botonPresionado('../media/sounds/hasta_luegor.mp3',"../index.html");