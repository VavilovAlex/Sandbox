class Steam {
    color = "#878787";
    updated = false;
    solidity = 1;

    Update(x, y) {
        if (this.updated === true){
            return;
        }

        if(y > 0 && world[x][y - 1].solidity < this.solidity)
        {
            Move(x, y, x, y - 1);
        }
        else if (
            x > 0
            && world[x - 1][y - 1].solidity < this.solidity
            && world[x - 1][y].solidity < this.solidity) {
            Move(x, y, x - 1, y - 1);
        } 
        else if (
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
