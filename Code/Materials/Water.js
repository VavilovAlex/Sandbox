class Water {
    color = "#2254ff";
    updated = false;
    solidity = 5;

    constructor() {
        switch (Math.round(Math.random() * 3)) {
            case 0: this.color = "#0000ff";
                break;
            case 1: this.color = "#0000c8";
                break;
            case 2: this.color = "#0032ff";
                break;
            case 3: this.color = "#0032c8";
                break;
        }
    }
    
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
