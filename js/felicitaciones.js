mostrarGanador = function (x, y){

    textoN = new NombresAnimales('#eaf1d800', "Jugador: " + localStorage.getItem('alias'), x, y - 70);
    textoS = new NombresAnimales('#eaf1d800', localStorage.getItem('score'), x + 300, y - 70);
    textoT = new NombresAnimales('#eaf1d800', localStorage.getItem('time'), x + 400, y - 70);
    textoN.textoFelicitacion("40px Arial");
    textoS.CuadroTexto(x, y);
    textoT.CuadroTexto(x, y);
}

const felicitacion = new Fondo("../media/assets/Pantalla-felicitaciones/fondo-felicitaciones.png", 0, 0, 800, 600, 'mi-canvas-felici');
const letreroWin  = new Botones('', 410, 110, 300, 150, "../media/assets/Pantalla-felicitaciones/win.png");

felicitacion.dibujaFondo();

setTimeout(function () {
    letreroWin.dibujarImg();
    mostrarGanador(200, 330);
}, 150);



exit.botonPresionado('../media/sounds/hasta_luegor.mp3',"../index.html");