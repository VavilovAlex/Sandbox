let isDrawing = false;
let mouse_x = 0;
let mouse_y = 0;

canvas.addEventListener('mousedown', e => {
    mouse_x = e.offsetX;
    mouse_y = e.offsetY;
    isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        mouse_x = e.offsetX;
        mouse_y = e.offsetY;
    }
});

window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        mouse_x = 0;
        mouse_y = 0;
        isDrawing = false;
    }
});

function DrawWithMouse() {
    if(isDrawing) {
        let x = Math.floor(mouse_x / x_mult);
        let y = Math.floor(mouse_y / y_mult);
        world[x][y] = ParticleFactory();
        world[x + 1][y] = ParticleFactory();
        world[x - 1][y] = ParticleFactory();
        world[x][y + 1] = ParticleFactory();
        world[x][y - 1] = ParticleFactory();
    }
}
