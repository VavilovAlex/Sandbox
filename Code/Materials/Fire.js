class Fire
{
    color = "#ff0000";
    solidity = 10;
    hp = 1000;
    damage = 2;
    tick = 0;
    generate_smoke_every = 50;
    
    constructor() {
        switch (Math.round(Math.random() * 2)) {
            case 0: this.color = "#de4600";
                break;
            case 1: this.color = "#ff6e2b";
                break;
            case 2: this.color = "#ff5d00";
                break;
        }
    }

    Update(x, y) {
        switch (Math.round(Math.random() * 2)) {
            case 0: this.color = "#de4600";
                break;
            case 1: this.color = "#ff6e2b";
                break;
            case 2: this.color = "#ff5d00";
                break;
        }
        this.hp--;
        if(this.hp <= 0)
            world[x][y] = new Air();
        Draw(x,y);
        
        if(world[x][y + 1].flammable)
        {
            this.Ignite(x, y + 1);
        }
        if(world[x][y - 1].flammable)
        {
            this.Ignite(x, y - 1);
        }
        if(world[x + 1][y].flammable)
        {
            this.Ignite(x + 1, y);
        }
        if(world[x - 1][y].flammable)
        {
            this.Ignite(x - 1, y);
        }

        if(world[x][y + 1] instanceof Water)
        {
            world[x][y + 1] = new Steam();
            world[x][y] = new Steam();
        }
        if(world[x][y - 1] instanceof Water)
        {
            world[x][y - 1] = new Steam();
            world[x][y] = new Steam();
        }
        if(world[x + 1][y] instanceof Water)
        {
            world[x + 1][y] = new Steam();
            world[x][y] = new Steam();
        }
        if(world[x - 1][y] instanceof Water)
        {
            world[x - 1][y] = new Steam();
            world[x][y] = new Steam();
        }

        this.tick++;
        
        if(this.tick >= this.generate_smoke_every)
        {
            this.tick = 0;
            if(world[x][y + 1] instanceof Air)
            {
                world[x][y + 1] = new Smoke();
            }
            else if(world[x][y - 1]  instanceof Air)
            {
                world[x][y - 1] = new Smoke();
            }
            else if(world[x + 1][y] instanceof Air)
            {
                world[x + 1][y] = new Smoke();
            }
            else if(world[x - 1][y] instanceof Air)
            {
                world[x - 1][y] = new Smoke();
            }
        }
        
    }
    
    Ignite(x, y)
    {
        world[x][y].hp -= this.damage;
        this.hp += this.damage;
        if(world[x][y].hp <= 0)
            world[x][y] = new Fire();
    }
}