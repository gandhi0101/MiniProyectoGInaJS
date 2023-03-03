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
        let usuariosJSON = [];

        // Agrega todos los usuarios del almacenamiento local al objeto usuariosJSON
        const usuariosLocalStorage = localStorage.getItem('usuarios');
        if (usuariosLocalStorage) {
            usuariosJSON = Object.assign(usuariosJSON, JSON.parse(usuariosLocalStorage));
        }
        usuariosJSON.push({ alias: localStorage.getItem('alias') }, { score: localStorage.getItem('score') });

        // Guarda el objeto usuariosJSON en el almacenamiento local
        localStorage.setItem('usuarios', JSON.stringify(usuariosJSON));
        // Imprime el objeto usuariosJSON en la consola
        console.log(us);
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
    constructor(img, x, y, width, height, idCanvas) {
        super(x, y, width, height, img);
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
    CuadroTexto(x, y,) {
        let width = 150;
        let height = 70;


        var radius = 20;

        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.arcTo(x + width, y, x + width, y + radius, radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
        ctx.lineTo(x + radius, y + height);
        ctx.arcTo(x, y + height, x, y + height - radius, radius);
        ctx.lineTo(x, y + radius);
        ctx.arcTo(x, y, x + radius, y, radius);

        ctx.fillStyle = this.img;
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.font = '15px sans-serif';
        ctx.fillText(this.name, x + 10, y + 25);
    }

}