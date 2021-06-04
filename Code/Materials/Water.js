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
