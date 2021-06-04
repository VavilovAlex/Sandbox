class Smoke {
    color = "#878787";
    updated = false;
    solidity = 2;

    constructor() {
        switch (Math.round(Math.random() * 2)) {
            case 0: this.color = "#5a5a5a";
                break;
            case 1: this.color = "#505050";
                break;
            case 2: this.color = "#464646";
                break;
        }
    }

    Update(x, y) {
        if (this.updated === true){
            return;
        }

        if(y > 0 && world[x][y - 1].solidity < this.solidity)
        {
            Move(x, y, x, y - 1);
        }
        else if (
            x > 0 && y > 0
            && world[x - 1][y - 1].solidity < this.solidity
            && world[x - 1][y].solidity < this.solidity) {
            Move(x, y, x - 1, y - 1);
        }
        else if (
            x < width - 1 && y > 0
            && world[x + 1][y - 1].solidity < this.solidity
            && world[x + 1][y].solidity < this.solidity) {
            Move(x, y, x + 1, y - 1);
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
