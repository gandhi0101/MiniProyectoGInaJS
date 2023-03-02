canvas = [];
ctx = [];

class User {
    #alias;
    #score;

    constructor() {
        localStorage.removeItem('hasRedirected2');
        const alias = localStorage.getItem('alias');
        const score = localStorage.getItem('score');
        let hasRedirected = localStorage.getItem('hasRedirected');

        if (!alias) {
            console.log('No tiene Usuario(alias) :(');

            if (!hasRedirected) {
                localStorage.setItem('hasRedirected', true);
                window.location.replace('../ingresarAlias.html');

            }
        } else {
            this.#alias = alias;
            this.#score = score;
            this.saluda();
        }

        console.log(this.#alias + '\n' + this.#score);
    }

    ingresaAlias = function () {
        localStorage.removeItem('hasRedirected');
        const inputAlias = document.getElementById('inputAlias');
        localStorage.setItem('alias', inputAlias.value);
        localStorage.setItem('score', 0);
        console.log(inputAlias.value)
        let hasRedirected = localStorage.getItem('hasRedirected');
        if (!hasRedirected) {
            localStorage.setItem('hasRedirected2', true);
            window.location.replace('../Score.html');
        }
    }
    saluda() {

    }
}
class ElementoJuego {
    x;
    y;
    width;
    height;
    img;// ruta de imagen o color

    constructor(x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
    }

    draw() {
        const imgElemento = new Image();
        imgElemento.src = this.img;
        const self = this

        imgElemento.onload = function () {
            ctx.drawImage(imgElemento, self.x, self.y, self.width, self.height);
        }
    }

}

class Fondo extends ElementoJuego {
    constructor(img, x, y, idCanvas) {
        super(x, y, 3840 / 3, 2160 / 3, img);
        canvas = document.getElementById(idCanvas);
        ctx = canvas.getContext('2d');
        canvas.width = 3840 / 3;
        canvas.height = 2160 / 3;
    }

    dibujaFondo() {
        super.draw();
    }
    clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // borrar la imagen del botón

    }
}

class Botones extends ElementoJuego {
    texto;
    fondo;//en caso de img se usa dibujarimg de lo contrario dibujar(cuadrado) 
    // url     o    color
    constructor(texto, x, y, width, height, fondo) {
        super(x - (width / 2), y - (height / 2), width, height, fondo);
        this.texto = texto;
        this.fondo = fondo;
    }

    dibujarImg() {
        super.draw();
    }

    dibujar() {
        ctx.fillStyle = this.fondo;
        ctx.fillRect(100, 70, 130, 50);
    }

    botonPresionado(urlAudio, urlDireccion) {
        const self = this;

        canvas.addEventListener('click', function (event) {
            //console.log(event.offsetX+"  "+event.offsetY+"\n"+ self.x+"  " +self.y);
            if (event.offsetX > self.x && event.offsetX < self.x + self.width && event.offsetY > self.y && event.offsetY < self.y + self.height) {
                console.log('Botón presionado');
                canvas.removeEventListener('click', event);
                var audio = new Audio(urlAudio);
                audio.play();
                window.location.replace(urlDireccion);

            }
        });
    }

}


class Animal extends ElementoJuego {
    name;
    sound;

    constructor(img, name, x, y, width, height) {
        super(x, y, width, height, img);
        this.name = name;
        console.log(this.name);
    }

    draw() {
        super.draw();

    }
    cuadro(color) {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y - 20, this.width, this.height);
    }
}
class NombresAnimales extends ElementoJuego {

    constructor(color, name, x, y) {
        super(x + 60, y - 60, ((canvas.width - 100) / 6) - 10, 60, color,)
        this.name = name;
    }
    Cuadro() {
        /*ctx.fillStyle = this.img;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillText("hola guapos", this.x + 5, this.y + 5);*/
        var radius = 20;

        ctx.beginPath();
        ctx.moveTo(this.x + radius, this.y);
        ctx.lineTo(this.x + this.width - radius, this.y);
        ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + radius, radius);
        ctx.lineTo(this.x + this.width, this.y + this.height - radius);
        ctx.arcTo(this.x + this.width, this.y + this.height, this.x + this.width - radius, this.y + this.height, radius);
        ctx.lineTo(this.x + radius, this.y + this.height);
        ctx.arcTo(this.x, this.y + this.height, this.x, this.y + this.height - radius, radius);
        ctx.lineTo(this.x, this.y + radius);
        ctx.arcTo(this.x, this.y, this.x + radius, this.y, radius);

        ctx.fillStyle = this.img;
        ctx.fill();
    }

    arrastrar() {
        //if()
    }
    soltar() {

    }
    CuadroTexto(x,y,) {
        let width=150;
        let height=70;
        

        var radius = 20;

        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x +width - radius,y);
        ctx.arcTo(x +width, y, x +width, y + radius, radius);
        ctx.lineTo(x +width, y +height - radius);
        ctx.arcTo(x +width, y +height, x +width - radius, y +height, radius);
        ctx.lineTo(x + radius, y +height);
        ctx.arcTo(x, y +height, x, y +height - radius, radius);
        ctx.lineTo(x, y + radius);
        ctx.arcTo(x, y, x + radius, y, radius);

        ctx.fillStyle = this.img;
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.font = '15px sans-serif';
        ctx.fillText(this.name, x + 10, y + 25);
    }

}

const persona = new User;

const play = new Fondo("../media/assets/Pantalla-principal/fondo-principal.png", 0, 0, "game");
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
        nombresAnimales[i].CuadroTexto(180*(i+1),10,)
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



