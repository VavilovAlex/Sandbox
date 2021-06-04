class Steam {
    color = "#878787";
    updated = false;
    solidity = 1;
    tick = 0;
    transform_into_water_in = 1000;
    
    constructor() {
        switch (Math.round(Math.random() * 2)) {
            case 0: this.color = "#c8c8c8";
                break;
            case 1: this.color = "#bebebe";
                break;
            case 2: this.color = "#b4b4b4";
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

        this.tick++;

        if(this.tick >= this.transform_into_water_in)
        {
            if(y < height - 1
               && world[x][y + 1] instanceof Steam)
            {
                world[x][y + 1] = new Air;
                world[x][y] = new Water();
            }
            else if(
                y > 0
                && world[x][y - 1]  instanceof Steam)
            {
                world[x][y - 1] = new Air();
                world[x][y] = new Water();
            }
            else if(
                x < width - 1
                && world[x + 1][y] instanceof Steam)
            {
                world[x + 1][y] = new Air();
                world[x][y] = new Water();
            }
            else if(
                x > 0
                && world[x - 1][y] instanceof Steam)
            {
                world[x - 1][y] = new Air();
                world[x][y] = new Water();
            }
        }
        }

    
}
