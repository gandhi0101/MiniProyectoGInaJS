
//mostrar el JSON con los Scores
function MostraScore(x, y) {

    const users = new User();
    let usersJSON = users.ShowScore();
    //var highScore
    usersJSON.sort(function (a,b){
        return a.score-b.score;
    });
    usersJSON.reverse()
;    console.log(usersJSON);
    for (let i = 0; i < 5; i++) {


        textoN = new NombresAnimales('#eaf1d8cf', usersJSON[i].alias, x, y)
        textoS = new NombresAnimales('#eaf1d8cf', usersJSON[i].score, x + 400, y);
        textoN.CuadroTexto(x, y + (80 * i + 1));
        textoS.CuadroTexto(x + 200, y + (80 * i + 1));
    }
}
//console.log("hola");
const score = new Fondo("../media/assets/Pantalla-score/fondo.png", 0, 0, 800, 600, 'mi-canvas-score');
const marco = new Fondo("../media/assets/Pantalla-score/zyro-image (2).png", -10, -80, 800, 700, 'mi-canvas-score');
const exit = new Botones('', 60, 50, 300, 150, "../media/assets/Pantalla-principal/exit.png")
score.dibujaFondo();
setTimeout(function () {
    marco.dibujaFondo();
}, 150);
setTimeout(function () {
    exit.dibujarImg();


}, 160);
setTimeout(function () {
    MostraScore(250, 130);

}, 200);

exit.botonPresionado('../media/sounds/hasta_luegor.mp3', '../')


