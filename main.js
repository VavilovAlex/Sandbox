const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

width = 100;
height = 100;

let y_mult = canvas.height / height;
let x_mult = canvas.width / width;

function Move(x1, y1, x2, y2)
{
    world[x2][y2] = world[x1][y1];
    world[x1][y1] = new Air();
}

function Draw(x, y) {
    context.beginPath();
    context.rect(x * x_mult, y * y_mult, x_mult, y_mult);
    context.fillStyle = world[x][y].color;
    context.fill();
    context.closePath();
}

class Air
{
    color = "#ffffff";
    
    Update() {}
}

class Sand {
    color = "#ffe855";
    updated = false;
    
    Update(x, y) {
        if (this.updated === true){
            return;
        }
        this.updated = true;
        
        if(y === height - 1) return;
        if(world[x][y + 1] instanceof Air)
        {
            Move(x, y, x, y + 1);
        }
        else{
            if (x > 0 && world[x - 1][y + 1] instanceof Air) {
                Move(x, y, x - 1, y + 1);
            } else if (x < width - 1 && world[x + 1][y + 1] instanceof Air) {
                Move(x, y, x + 1, y + 1);
            }
        }
        
    }
}

function UpdateWorld() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            world[x][y].updated = false;
        }
    }
    
    for (let x = 0; x < width; x++) {
        for (let y = height - 1; y >= 0; y--) {
            world[x][y].Update(x, y);
        }
    }

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            Draw(x,y);
        }
    }
}

let world = [];

for (let x = 0; x < width; x++) {
    world[x] = [];
    for (let y = 0; y < height; y++) {
        world[x][y] = new Air();
    }
}

for (let j = 0; j < 50; j++) {
    for (let i = 0; i < 40; i++) {
        world[30 + j][i] = new Sand();
    } 
}


let interval = setInterval(UpdateWorld, 100)