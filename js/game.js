iniciarCronometro();

setTimeout(function () {
    detenerCronometro();
},60000);
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
    console.log(randomPositions);
    return randomPositions;
}

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
}

const persona = new User;

const play = new Fondo("../media/assets/Pantalla-principal/fondo-principal.png", 0, 0, 3840 / 3, 2160 / 3, "game");
const exit = new Botones('', 60, 50, 300, 150, "../media/assets/Pantalla-principal/exit.png")
const ready = new Botones('',1200,45,100,75,"../media/assets/Pantalla-alias/aceptar.png")
//
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
play.dibujaFondo();
rand = randomPosition();
//ctx.globalCompositeOperation = 'destination-out';

const animalData = [
    { src: "../media/img/Leon.png", name: "Leon" },
    { src: "../media/assets/Pantalla-principal/chango.png", name: "Mono" },
    { src: "../media/assets/Pantalla-principal/elefante.png", name: "Elefante" },
    { src: "../media/assets/Pantalla-principal/zebra.png", name: "Zebra" },
    { src: "../media/assets/Pantalla-principal/hipopotamo.png", name: "hipopotamo" },
    { src: "../media/img/Rinoceronte.png", name: "Rinoceronte" },
];
const coord= [];
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
        200
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
    ready.dibujarImg();
    for (let i = 0; i < 6; i++) {
        animals[i].draw();
        Animales[i].Cuadro();
        nombresAnimales[i].CuadroTexto()
    }
    exit.botonPresionado('../media/sounds/hasta_luego.mp3', '../index.html');
    ready.botonPresionado('../media/sounds/Como_te_fue.mp3', '../valida.html');
}, 600);


//let shape =  nombresAnimales;

let current_shape_index = null;
let is_dragging = false;
let startX, startY;

const is_mouse_in_shape = (x, y, shape) => x > shape.x && x < shape.x + shape.width && y > shape.y && y < shape.y + shape.height;

canvas.addEventListener('mousedown', (event) => {
    event.preventDefault();
    console.log('mousedown');
    const offset_x = canvas.getBoundingClientRect().left;
    const offset_y = canvas.getBoundingClientRect().top;
    startX = parseInt(event.clientX - offset_x);
    startY = parseInt(event.clientY - offset_y);
    let index = 0;
    for (let shape of nombresAnimales) {
        if (is_mouse_in_shape(startX, startY, shape)) {
            current_shape_index = index;
            console.log(shape);

            is_dragging = true;
            break;
        }
        index++;
    }
});

canvas.addEventListener('mouseup', (event) => {
    if (!is_dragging) {
        return;
    }
    event.preventDefault();
    is_dragging = false;
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
        console.log("hola");
        // Dibujar los nombres de los animales y borrar los nombres antiguos
        for (let shape of nombresAnimales) {
            // Borrar el rectángulo alrededor del nombre del animal
            ctx.clearRect(shape.xT, shape.yT, shape.width, shape.height);

            // Dibujar el nombre del animal actualizado
            shape.CuadroTexto();
        }
    }, 150);

};

draw_nombresAnimales();

//const orderedPositions = randomPosition();
//console.log(orderedPositions);


