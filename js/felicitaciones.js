mostrarGanador = function (x, y){
    var fondoGanador = new NombresAnimales("#eaf1d8aa", "", 55, 130);
    fondoGanador.cuadroFondo(700, 400);

    textoN = new NombresAnimales('#eaf1d800', "Jugador: " + localStorage.getItem('alias'), 90, 230);
    textoS = new NombresAnimales('#eaf1d800', "Puntuacion: " + localStorage.getItem('score'), 500, 230);
    textoT = new NombresAnimales('#eaf1d800', "Tiempo : " + localStorage.getItem('Time')+' s', x + 100, 350);
    textoN.textoFelicitacion("30px Arial");
    textoS.textoFelicitacion("30px Arial");
    textoT.textoFelicitacion("30px Arial");
}

const felicitacion = new Fondo("../media/assets/Pantalla-felicitaciones/fondo-felicitaciones.png", 0, 0, 800, 600, 'mi-canvas-felici');
const letreroWin  = new Botones('', 410, 110, 300, 150, "../media/assets/Pantalla-felicitaciones/win.png");
const exit = new Botones('', 60, 50, 300, 150, "../media/assets/Pantalla-principal/exit.png")

felicitacion.dibujaFondo();

setTimeout(function () {
    letreroWin.dibujarImg();
    mostrarGanador(200, 330);
    exit.dibujarImg();
}, 300);



exit.botonPresionado('../media/sounds/hasta_luegor.mp3', '../Score.html')