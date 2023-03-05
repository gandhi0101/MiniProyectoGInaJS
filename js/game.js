iniciarCronometro();
setTimeout(function () {
    detenerCronometro();
}, 60000);
var contadordeanimales = 0;

localStorage.setItem("score", 0);
actualizarScore(50);
var screenWidth = window.innerWidth;

// Verificar si hay un valor de zoom establecido en el elemento body
var currentZoom = document.body.style.zoom;
if (currentZoom === "") {
    // Si no hay un valor de zoom establecido, establecer el zoom en función del ancho de la pantalla
    if (screenWidth > 1200) {
        // Pantallas grandes: 100% de zoom
        document.body.style.zoom = "100%";
    } else if (screenWidth > 768) {
        // Pantallas medianas: 80% de zoom
        document.body.style.zoom = "80%";
    } else {
        // Pantallas pequeñas: 60% de zoom
        document.body.style.zoom = "60%";
    }
}

function randomPosition() {
    const positions = [
        { x: 0, y: 200 },
        { x: 250, y: 200 },
        { x: 500, y: 200 },
        { x: 750, y: 200 },
        { x: 1000, y: 200 },
        { x: 0, y: 500 },
        { x: 250, y: 500 },
        { x: 500, y: 500 },
        { x: 750, y: 500 },
        { x: 1000, y: 500 },
    ];

    const randomPositions = [];
    const takenIndexes = [];


    for (let i = 0; i < 6; i++) {
        let randomIndex;
        do {
            randomIndex = random(10);
        } while (takenIndexes.includes(randomIndex));
        takenIndexes.push(randomIndex);
        randomPositions.push(positions[randomIndex]);
    }


    return randomPositions;
}

function random(max) {
    return Math.floor(Math.random() * max);

}
var cronometro = document.getElementById("cronometro");
var milisegundos = 0;
var intervalo = 0;


function random(max) {
    return Math.floor(Math.random() * max);
}

var cronometro = document.getElementById("cronometro");
var milisegundos = 0;
var intervalo = 0;

function iniciarCronometro() {
    intervalo = setInterval(actualizarCronometro, 10);
}

function detenerCronometro() {
    clearInterval(intervalo);
    window.location.replace('../Score.html');//la ruta queda pendiente
}

function actualizarCronometro() {
    milisegundos += 10;
    let date = new Date(milisegundos);
    cronometro.innerHTML = date.getUTCHours().toString().padStart(2, "0") + ":" +
        date.getUTCMinutes().toString().padStart(2, "0") + ":" +
        date.getUTCSeconds().toString().padStart(2, "0") + "." +
        date.getUTCMilliseconds().toString().padStart(3, "0");

    localStorage.setItem('Time', parseInt(milisegundos / 1000));

}
function actualizarScore(score) {
    let usersJSON = localStorage.getItem('usuarios');
    let alias = localStorage.getItem('alias');
    usersJSON = JSON.parse(usersJSON);
    for (const user of usersJSON) {
        if (user.alias === alias) {
            if (user.score < score) {
                user.score = score;
                localStorage.setItem('usuarios', JSON.stringify(usersJSON));
                break;
            }
            break;
        }
    }
}

const persona = new User;

const play = new Fondo("../media/assets/Pantalla-principal/fondo-principal.png", 0, 0, 3840 / 3, 2160 / 3, "game");
const exit = new Botones('', 60, 50, 300, 150, "../media/assets/Pantalla-principal/exit.png")
exit.time = 0;
const ready = new Botones('', 1200, 45, 100, 75, "../media/assets/Pantalla-alias/aceptar.png")
//
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
play.dibujaFondo();
rand = randomPosition();
//ctx.globalCompositeOperation = 'destination-out';

const animalData = [
    { src: "../media/img/Leon.png", name: "Leon", sound: '../media/sounds/sonido-leon.mp3' },
    { src: "../media/assets/Pantalla-principal/chango.png", name: "Mono", sound: '../media/sounds/sonido-mono.mp3' },
    { src: "../media/assets/Pantalla-principal/elefante.png", name: "Elefante", sound: '../media/sounds/sonido-elefante.mp3' },
    { src: "../media/assets/Pantalla-principal/zebra.png", name: "Zebra", sound: '../media/sounds/sonido-cebra.mp3' },
    { src: "../media/assets/Pantalla-principal/hipopotamo.png", name: "hipopotamo", sound: '../media/sounds/sonido-hipo.mp3' },
    { src: "../media/img/hiena.png", name: "Hiena", sound: '../media/sounds/sonido-hiena.mp3' },
];




const Animales = [];
const nombresAnimales = [];
const animals = [];
for (let i = 0; i < animalData.length; i++) {
    const animal = new Animal(
        animalData[i].src,
        animalData[i].name,
        rand[i].x,
        rand[i].y,
        300,
        200,
        animalData[i].sound
    );
    let animales = new NombresAnimales('#EAF1D8', animalData[i].name, animal.x + 60, animal.y - 60);
    let NombreAnimales = new NombresAnimales('#EAF1D8', animalData[i].name, 160 * (i + 1), 10);
    Animales.push(animales);
    nombresAnimales.push(NombreAnimales);
    animals.push(animal);
}

//---------------------------------------------

setTimeout(function () {
    exit.dibujarImg();
    
    for (let i = 0; i < 6; i++) {
        window.addEventListener('load', function () {
            animals[i].draw();
            Animales[i].Cuadro();
        }); nombresAnimales[i].CuadroTexto()

    }


    exit.botonPresionado('../media/sounds/hasta_luego.mp3', '../index.html');

}, 600);

function termino(){
    if(contadordeanimales === 6){
        ready.dibujarImg();
        ready.botonPresionado('../media/sounds/Como_te_fue.mp3', '../valida.html');
    }
}

//let shape =  nombresAnimales;

let current_shape_index = null;
let is_dragging = false;
let startX, startY;

const is_mouse_in_shape = (x, y, shape) => x > shape.x && x < shape.x + shape.width && y > shape.y && y < shape.y + shape.height;

canvas.addEventListener('mousedown', (event) => {
    event.preventDefault();

    const offset_x = canvas.getBoundingClientRect().left;
    const offset_y = canvas.getBoundingClientRect().top;
    startX = parseInt(event.clientX - offset_x);
    startY = parseInt(event.clientY - offset_y);
    let index = 0;
    for (let shape of nombresAnimales) {
        if (is_mouse_in_shape(startX, startY, shape)) {
            current_shape_index = index;
            is_dragging = true;

        }
        index++;

    }
});

canvas.addEventListener('mouseup', (event) => {
    if (!is_dragging) {
        return;
    }
    event.preventDefault();
    let score = parseInt(localStorage.getItem('score'))
    if (is_mouse_in_shape(startX, startY + 60, animals[current_shape_index])) {
        console.log(true)
        //establecemos un valor predeterminado
        nombresAnimales[current_shape_index].x = Animales[current_shape_index].x;
        nombresAnimales[current_shape_index].y = Animales[current_shape_index].y;
        //lo dibuja y aumenta puntos
        draw_nombresAnimales();
        score += 50;
        localStorage.setItem('score', score);
        animals[current_shape_index].audio();
        //si el contador llega a 6 se muestra un boton para terminar
        contadordeanimales+=1;
        termino();
    }
    for (var i = 0; i < 6; i++) {
        if (i != current_shape_index) {// revisa si es el animal correcto
            if (is_mouse_in_shape(startX, startY, animals[i])) {
                console.log(false);
                nombresAnimales[current_shape_index].x = 160 * (current_shape_index + 1)
                nombresAnimales[current_shape_index].y = 10;
                draw_nombresAnimales();
                //resta 20 puntos al score no acptamos valores negativos
                score -= 20;
                if (score < 0) {
                    score = 0;

                }
                localStorage.setItem('score', score);
                ///y se reproduce el audo 
                var audio = new Audio('../media/sounds/Pou-No.mp3');
                audio.play();
                break;
            }
        }
    }
    actualizarScore(score);
    is_dragging = false;
    console.log(score);
});

canvas.addEventListener('mouseout', (event) => {
    if (!is_dragging) {
        return;
    }
    event.preventDefault();
    is_dragging = false;
});

canvas.addEventListener('mousemove', (event) => {
    if (!is_dragging) {
        return;
    }

    event.preventDefault();


    const offset_x = canvas.getBoundingClientRect().left;
    const offset_y = canvas.getBoundingClientRect().top;
    //console.log(offset_x + "\n" + offset_x)
    const mouseX = parseInt(event.clientX - offset_x);
    const mouseY = parseInt(event.clientY - offset_y);
    const dx = mouseX - startX;
    const dy = mouseY - startY;
    const current_shape = nombresAnimales[current_shape_index];
    current_shape.x += dx;
    current_shape.y += dy;
    draw_nombresAnimales();

    startX = mouseX;
    startY = mouseY;

});

const draw_nombresAnimales = () => {
    // Dibujar el fondo
    play.dibujaFondo();

    // Dibujar los objetos (excepto los nombres de los animales)
    setTimeout(function () {
        exit.dibujarImg();
        for (let i = 0; i < 6; i++) {
            
            animals[i].draw();
            Animales[i].Cuadro();
        }
        setTimeout(function () {
            // Dibujar los nombres de los animales y borrar los nombres antiguos
            for (let shape of nombresAnimales) {
                // Borrar el rectángulo alrededor del nombre del animal
                ctx.clearRect(shape.xT, shape.yT, shape.width, shape.height);

                // Dibujar el nombre del animal actualizado
                shape.CuadroTexto();
            }
        })


    }, 150);
}
    

    
draw_nombresAnimales();

//const orderedPositions = randomPosition();
//console.log(orderedPositions);

