class Sand {
    color = "#c9c530";
    updated = false;
    solidity = 9;

    constructor() {
        switch (Math.round(Math.random() * 3)) {
            case 0: this.color = "#ffe600";
                break;
            case 1: this.color = "#f5dc00";
                break;
            case 2: this.color = "#ebd200";
                break;
            case 3: this.color = "#e1c800";
                break;
        }
    }
    
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