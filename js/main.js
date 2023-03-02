canvas = [];
ctx = [];
var band = false;

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
        super(x, y, 800, 600, img);
        canvas = document.getElementById(idCanvas);
        ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;
    }

    dibujaFondo() {
        super.draw();
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

    botonPresionado(urlAudio,urlDireccion) {
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



const persona = new User;

const inicio = new Fondo("../media/assets/Pantalla-presentacion/fondo-presentacion.png", 0, 0, 'mi-canvas');
const empezar = new Botones('', 400, 300, 300, 150, "../media/assets/Pantalla-presentacion/boton-inicio.png")
//
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
// hay que tener cuidado de que se cargue primero el fondo antes que cualquier cosa porque de lo contrario se manda al fondo el resto de elenentos
inicio.dibujaFondo();
setTimeout(function () {
    empezar.dibujarImg();
}, 150);

empezar.botonPresionado('../media/sounds/vamos_a_empezar.mp3',"../game.html")
