class Wood
{
    color = "#823804";
    solidity = 3;
    drawn = false;

    Update(x, y) {
        if(!this.drawn)
            Draw(x,y);
        this.drawn = true;
    }
}