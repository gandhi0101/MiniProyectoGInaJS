

const persona = new User;

const play = new Fondo("../media/assets/Pantalla-principal/fondo-principal.png", 0, 0, 3840 / 3, 2160 / 3, "game");
const exit = new Botones('', 60, 50, 300, 150, "../media/assets/Pantalla-principal/exit.png")
//
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
play.dibujaFondo();
rand = randomPosition();

const animalData = [
    { src: "../media/img/Leon.png", name: "Leon" },
    { src: "../media/assets/Pantalla-principal/chango.png", name: "Mono" },
    { src: "../media/assets/Pantalla-principal/elefante.png", name: "Elefante" },
    { src: "../media/assets/Pantalla-principal/zebra.png", name: "Zebra" },
    { src: "../media/assets/Pantalla-principal/hipopotamo.png", name: "hipopotamo" },
    { src: "../media/img/Rinoceronte.png", name: "Rinoceronte" },
];
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

    nombreAnimal = new NombresAnimales('#EAF1D8', animal.name, animal.x, animal.y);
    nombresAnimales.push(nombreAnimal);
    animals.push(animal);
}
console.log(animals);
console.log(nombresAnimales);
//---------------------------------------------

setTimeout(function () {
    exit.dibujarImg();
    for (let i = 0; i < animals.length; i++) {
        animals[i].draw();
        nombresAnimales[i].Cuadro();
        console.log(i)
        nombresAnimales[i].CuadroTexto(180 * (i + 1), 10,)
    }

    exit.botonPresionado('../media/sounds/hasta_luegor.mp3', '../')


}, 500);


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

//const orderedPositions = randomPosition();
//console.log(orderedPositions);



