
//mostrar el JSON con los Scores
function MostraScore(x, y) {
    let users = new User();
    let usersJSON = users.ShowScore();
    let textoN = [];
    let textoS = [];
    console.log(usersJSON);
    for (let i = 0; i < usersJSON.length; i++) {
        textoN = new Botones(usersJSON[i].alias, x, y, 150, 70, '#eaf1d85f')
        textoS = new Botones(usersJSON[i].score, x + 400, y, 100, 70, '#eaf1d85f');
        textoN[i].dibujar();
        textoS[i].dibujar();
    }
}
//console.log("hola");
const score = new Fondo("../media/assets/Pantalla-score/fondo.png", 0, 0, 800, 600, 'mi-canvas-score');
const marco = new Fondo("../media/assets/Pantalla-score/zyro-image (2).png", -50, -50, 900, 620, 'mi-canvas-score');
const exit = new Botones('', 60, 50, 300, 150, "../media/assets/Pantalla-principal/exit.png")

//score.dibujaFondo();
setTimeout(function () {
    marco.dibujaFondo();
    MostraScore(100, 300);

}, 150);
setTimeout(function () {
    exit.dibujarImg();
}, 155);

exit.botonPresionado('../media/sounds/hasta_luegor.mp3', '../')


