const canvas = document.getElementById("canvas");
const color_input = document.getElementById("color-input");

const ctx = canvas.getContext('2d');

let x, y;
let isPressed = false;
let lineColor = 'black';

canvas.addEventListener("mousedown", (event) => {
    isPressed = true;

    x = event.offsetX;
    y = event.offsetY;
});

canvas.addEventListener("mouseup", (event) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (event) => {
    if(isPressed) {
        drawLine(x, y, event.offsetX, event.offsetY);
        x = event.offsetX;
        y = event.offsetY;
    }
});

color_input.addEventListener("change", (e) => {
    lineColor = e.target.value;
});

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 5;
    ctx.stroke();
}