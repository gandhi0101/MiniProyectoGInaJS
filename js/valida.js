function valida() {
    let usuarioExistente = false;
    let usuariosJSON = [];
    usuariosJSON = JSON.parse(localStorage.getItem("usuarios")) || []; // Inicializa usuariosJSON como un array vacío si el almacenamiento local está vacío
    const nuevoscore = {
        alias: localStorage.getItem("alias"),
        score: localStorage.getItem("score"),
        tiempo: localStorage.getItem("Time"),
    };
    console.log(nuevoscore);
    let puntosT = 60 - nuevoscore.tiempo;//50
    var score;
    score = 0;
    score =score + (puntosT * 9);
    localStorage.setItem("score", score);
    console.log(JSON.stringify(usuariosJSON));

    for (const usuario of usuariosJSON) {
        if (usuario.alias === nuevoscore.alias) {
            if (usuario.score < score){
                usuario.score = score;

            }
            if(usuario.tiempo < nuevoscore.tiempo){
                usuario.tiempo = nuevoscore.tiempo;
            }
        }
    }
    console.log(JSON.stringify(usuariosJSON));
    localStorage.setItem("usuarios", JSON.stringify(usuariosJSON));
    window.location.replace("../felicitaciones.html");
}


