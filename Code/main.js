const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d', { alpha: false });

canvas.width = innerWidth;
canvas.height = innerHeight - 100;

let y_mult = 4;
let x_mult = 4;

height = Math.floor(canvas.height / y_mult);
width = Math.floor(canvas.width / x_mult);

let world = [];

ClearWorld();

let interval = setInterval(UpdateWorld, 10);
let interval2 = setInterval(DrawWithMouse, 50);

