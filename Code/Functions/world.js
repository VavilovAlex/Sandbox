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

    // for (let x = width - 1; x >= 0; x--){
    //     for (let y = height - 1; y >= 0; y--) {
    //         world[x][y].Update(x, y);
    //     }
    // }
}

function ClearWorld() {
    for (let x = 0; x < width; x++) {
        world[x] = [];
        for (let y = 0; y < height; y++) {
            world[x][y] = new Air();
        }
    }
}