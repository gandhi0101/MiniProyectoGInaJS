const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 11;
canvas.height = window.innerHeight - 13.1;
canvas.style.border = '5px solid red';

const nombresAnimales = [{ x: 200, y: 50, width: 200, height: 200, color: 'red' }];
nombresAnimales.push({ x: 100, y: 50, width: 100, height: 100, color: 'blue' });

let current_shape_index = null;
let is_dragging = false;
let startX, startY;

const is_mouse_in_shape = (x, y, nomAnimales) => x > nomAnimales.x && x < nomAnimales.x + nomAnimales.width && y > nomAnimales.y && y < nomAnimales.y + nomAnimales.height;

canvas.addEventListener('mousedown', (event) => {
    event.preventDefault();
    console.log('mousedown');
    const offset_x = canvas.getBoundingClientRect().left;
    const offset_y = canvas.getBoundingClientRect().top;
    startX = parseInt(event.clientX - offset_x);
    startY = parseInt(event.clientY - offset_y);
    let index = 0;
    for (let nomAnimales of nombresAnimales) {
        if (is_mouse_in_shape(startX, startY, nomAnimales)) {
            current_shape_index = index;
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
    console.log('mouseup');
    event.preventDefault();
    is_dragging = false;
});

canvas.addEventListener('mouseout', (event) => {
    if (!is_dragging) {
        return;
    }
    console.log('mouseout');
    event.preventDefault();
    is_dragging = false;
});

canvas.addEventListener('mousemove', (event) => {
    if (!is_dragging) {
        return;
    }
    console.log('mousemove');
    event.preventDefault();
    const offset_x = canvas.getBoundingClientRect().left;
    const offset_y = canvas.getBoundingClientRect().top;
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    console.log(nombresAnimales);
    for (let nomAnimales of nombresAnimales) {
        ctx.fillStyle = nomAnimales.color;
        ctx.fillRect(nomAnimales.x, nomAnimales.y, nomAnimales.width, nomAnimales.height);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('hola', nomAnimales.x + 100, nomAnimales.y + 100)
    }
};

draw_nombresAnimales();


