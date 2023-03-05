//mostrar el JSON con los Scores
function MostraScore(x, y) {

    const users = new User();
    let usersJSON = users.ShowScore();
    //var highScore
    usersJSON.sort(function (a, b) {
        return a.score - b.score;
    });
    usersJSON.reverse();
    console.log(usersJSON);
    textoN = new NombresAnimales('#eaf1d8ff', "Alias", x, y - 70);
    textoS = new NombresAnimales('#eaf1d8ff', "Score", x + 300, y - 70);
    textoT = new NombresAnimales('#eaf1d8ff', "Tiempo", x + 400, y - 70);
    textoN.CuadroTexto(x, y);
    textoS.CuadroTexto(x, y);
    textoT.CuadroTexto(x, y);
    for (let i = 0; i < Math.min(usersJSON.length, 5); i++) {

        textoN = new NombresAnimales('#eaf1d8cf', usersJSON[i].alias, x, y + (80 * i + 1));

        textoS = new NombresAnimales('#eaf1d8cf', usersJSON[i].score, x + 300, y + (80 * i + 1));
        textoT = new NombresAnimales('#eaf1d8cf', usersJSON[i].tiempo, x + 400, y + (80 * i + 1));
        textoN.CuadroTexto(x, y);
        textoS.CuadroTexto(x, y);
        textoT.CuadroTexto(x, y);
    }
}
//console.log("hola");

const score = new Fondo("../media/assets/Pantalla-score/fondo.png", 0, 0, 850, 700, 'mi-canvas-score');
const marco = new Fondo("../media/assets/Pantalla-score/zyro-image (2).png", -10, -80, 850, 700, 'mi-canvas-score');
const exit = new Botones('', 60, 50, 300, 150, "../media/assets/Pantalla-principal/exit.png")

exit.time = 0;

score.dibujaFondo();
setTimeout(function () {
    marco.dibujaFondo();
}, 150);
setTimeout(function () {
    exit.dibujarImg();


}, 160);
setTimeout(function () {
    MostraScore(200, 130);

}, 300);

exit.botonPresionado('../media/sounds/hasta_luegor.mp3', "../index.html");


