let type = "Sand";

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

function SetMaterial(input) {
    type = input;
}

function ParticleFactory() {
    switch (type) {
        case "Sand": return new Sand();
        case "Water": return new Water();
        case "Wood": return new Wood();
        case "Air": return new Air();
        case "Steam": return new Steam();
        case "Fire": return new Fire();
        case "Smoke": return new Smoke();
    }
}