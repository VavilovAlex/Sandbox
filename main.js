﻿const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let y_mult = 2;
let x_mult = 2;

height = Math.floor(canvas.height / y_mult);
width = Math.floor(canvas.width / x_mult);



function Move(x1, y1, x2, y2)
{
    let buffer = world[x2][y2];
    world[x2][y2] = world[x1][y1];
    world[x1][y1] = buffer;
    Draw(x1, y1);
    Draw(x2, y2);
    world[x1][y1].updated = true;
    world[x2][y2].updated = true;
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
    solidity = 0;
    
    Update() {}
}

class Sand {
    color = "#ffe855";
    updated = false;
    solidity = 3;
    
    Update(x, y) {
        if (this.updated === true){
            return;
        }
        this.updated = true;
        
        if(y === height - 1) return;
        if(world[x][y + 1].solidity < this.solidity)
        {
            Move(x, y, x, y + 1);
        }
        else{
            if (x > 0 
                && world[x - 1][y + 1].solidity < this.solidity
                && world[x - 1][y].solidity < this.solidity) {
                Move(x, y, x - 1, y + 1);
            } else if (
                x < width - 1 
                && world[x + 1][y + 1].solidity < this.solidity
                && world[x + 1][y].solidity < this.solidity) {
                Move(x, y, x + 1, y + 1);
            }
        }
        
    }
}

class Water {
    color = "#2254ff";
    updated = false;
    solidity = 2;
    
    Update(x, y) {
        if (this.updated === true){
            return;
        }
        
        if(y === height - 1) return;
        if(world[x][y + 1].solidity < this.solidity)
        {
            Move(x, y, x, y + 1);
        }
        else{
            if (x > 0
                && world[x - 1][y + 1].solidity < this.solidity
                && world[x - 1][y].solidity < this.solidity) {
                Move(x, y, x - 1, y + 1);
            } else if (
                x < width - 1
                && world[x + 1][y + 1].solidity < this.solidity
                && world[x + 1][y].solidity < this.solidity) {
                Move(x, y, x + 1, y + 1);
            }
            else if(
                x > 0
                && world[x - 1][y].solidity < this.solidity)
            {
                Move(x, y, x - 1, y);
            }
            else if(
                x < width - 1
                && world[x + 1][y].solidity < this.solidity)
            {
                Move(x, y, x + 1, y);
            }
        }

    }
}

let isDrawing = false;
let x = 0;
let y = 0;

canvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

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

    for (let x = width - 1; x >= 0; x--){
        for (let y = height - 1; y >= 0; y--) {
            world[x][y].Update(x, y);
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
        if(i % 2 === 0 ^ j % 2 === 0)
        world[30 + j][i] = new Sand();
    } 
}

for (let j = 0; j < 50; j++) {
    for (let i = 0; i < 40; i++) {
        if(i % 2 === 0 ^ j % 2 === 0)
            world[90 + j][i] = new Water();
    }
}

function Draw() {
    if(isDrawing)
        world[x / x_mult][y / y_mult] = new Sand();
}

let interval = setInterval(UpdateWorld, 10)
let interval2 = setInterval(Draw, 10)