function valida() {
    const tiempo = localStorage.getItem('Time');
    tiempo = 60- tiempo;
    let usuarioExistente = false;
    
    let usuariosJSON = [];

    usuariosJSON = JSON.parse(localStorage.getItem("usuarios")) || []; // Inicializa usuariosJSON como un array vacío si el almacenamiento local está vacío
    const nuevoUsuario = {
        alias: localStorage.getItem("alias"),
        score: localStorage.getItem("score"),
        tiempo: localStorage.getItem("tiempo"),
    };

    for (const usuario of usuariosJSON) {
        if (usuario.alias === nuevoUsuario.alias) {
            usuarioExistente = true;
            break;
        }
    }
    if (!usuarioExistente) {
        usuariosJSON.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosJSON));
    }
}
