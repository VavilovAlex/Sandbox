class Wood
{
    color = "#823804";
    solidity = 10;
    drawn = false;
    flammable = true;
    hp = 100;
    
    constructor() {
        switch (Math.round(Math.random() * 2)) {
            case 0: this.color = "#422d21";
                break;
            case 1: this.color = "#312119";
                break;
            case 2: this.color = "#2d2118";
                break;
        }
    }
    
    Update(x, y) {
        if(!this.drawn)
            Draw(x,y);
        this.drawn = true;
    }
}