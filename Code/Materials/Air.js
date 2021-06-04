class Air
{
    color = "#ffffff";
    solidity = 0;

    Update(x, y) {
        if(!this.drawn)
            Draw(x,y);
        this.drawn = true;
    }
}