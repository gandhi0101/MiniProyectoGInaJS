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

    botonPresionado(urlAudio) {
        const self = this;

        canvas.addEventListener('click', function (event) {
            //console.log(event.offsetX+"  "+event.offsetY+"\n"+ self.x+"  " +self.y);
            if (event.offsetX > self.x && event.offsetX < self.x + self.width && event.offsetY > self.y && event.offsetY < self.y + self.height) {
                console.log('Botón presionado');
                canvas.removeEventListener('click', event);
                var audio = new Audio(urlAudio);
                audio.play();
                window.location.replace("../");

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
class NombresAnimale extends Animal {

    constructor(color, name, x, y) {
        super(color, name, x, y, (cavas.width / 6) - 5, 50)
    }
    arrastrar() {
        //if()
    }
    soltar() {

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
const Leon = new Animal("../media/img/Leon.png", "Leon", rand[0].x, rand[0].y, 300, 200);
const Mono = new Animal("../media/assets/Pantalla-principal/chango.png", "Mono", rand[1].x, rand[1].y, 300, 200);
const Elefante = new Animal("../media/assets/Pantalla-principal/elefante.png", "Elefante", rand[2].x, rand[2].y, 300, 200);
const AnimaldeJuan = new Animal("../media/assets/Pantalla-principal/zebra.png", "Animal de juan", rand[3].x, rand[3].y, 300, 200);
const AnimaldeJuan2 = new Animal("../media/assets/Pantalla-principal/hipopotamo.png", "Animal de juan2", rand[4].x, rand[4].y, 300, 200);
const AnimaldeJuan3 = new Animal("../media/img/Rinoceronte.png", "Animal de juan3", rand[5].x, rand[5].y, 300, 200);
console.log(rand);
console.log(rand[3].y)
setTimeout(function () {
    exit.dibujarImg();
    Leon.draw();
    Mono.draw();
    Elefante.draw();
    AnimaldeJuan.draw();
    AnimaldeJuan2.draw();
    AnimaldeJuan3.draw();
    exit.botonPresionado('../media/sounds/hasta_luegor.mp3')
}, 150)

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
  
  const orderedPositions = randomPosition();
  console.log(orderedPositions);
  