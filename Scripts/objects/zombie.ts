module objects {
    export class Zombie extends objects.GameObject
    {
        // PRIVATE INSTANCE VARIBALES
        target: objects.Player;
        range: number = 200;
        screenWidth: number = 640;
        screenHeight: number = 480;
        spawnMax = 1;
        spawnMin = -1;

        //Public Properties
        public health: number;

        // CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue, target:objects.Player) {
            super(assetManager, "zombie");
            this.Start();
            this.health = 1;
            this.target = target;
        }

        //PUBLIC METHODS
        public Start()                  
        {
           this.Reset();
        }
        public Update()                 
        {
            //this.CheckBounds()
            this.ChasePlayer();
        }
        //Zombie gets hit by bullet
        public GetHit(): void
        {
            this.health --;
            if (this.health <= 0)
            {
                this.parent.removeChild(this);
            }
        }

        // PRIVATE METHODS
        private Reset():void 
        {
            this.health = 1;
            let borderRandNum = Math.random();
            let spawnPoint = new managers.Vector(0, 0);
            //console.log(borderRandNum);

            if (borderRandNum >0.75)
            {
                //Spawn Top
                spawnPoint.x = (Math.random() * this.screenWidth)+(this.spawnMax- this.spawnMin)+this.spawnMin ;
                spawnPoint.y = -0.1 * this.screenHeight;
                //console.log("Spawned top"+ spawnPoint.y);
            }
            else if (borderRandNum > 0.5)
            {
                //Spaen Left
                spawnPoint.x = -0.1 * this.screenWidth;
                spawnPoint.y = Math.random() * this.screenHeight;
            }
            else if (borderRandNum > 0.25) {
                //Spawn Right
                spawnPoint.x = 1.1 * this.screenWidth;
                spawnPoint.y = Math.random() * this.screenHeight;
            } else {
                //Spwan Bottom
                spawnPoint.x = Math.random() * this.screenWidth;
                spawnPoint.y = 1.1 * this.screenHeight;
            }

            this.x = spawnPoint.x;
            this.y = spawnPoint.y;
            
        }
        private CheckBounds()                // Check and set object bounds within canvas
        {
            if (this.x >= config.Screen.WIDTH - this.halfWidth) 
            {
                this.x =  config.Screen.WIDTH - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= config.Screen.HEIGHT - this.halfHeight) 
            {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
        }     
        private ChasePlayer()                // Method for zombies to follow player rotation and position
        {
            //Zombie rotation
            this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector (this.target.x, this.target.y));

            //If player is not in range, move slowly
            if (new managers.Vector(this.target.x, this.target.y).Add(new managers.Vector(-this.x, -this.y)).Magnitude() > this.range) 
            {
                this.x += managers.Vector.DegreeToVector(this.rotation).x * 0.1;
                this.y += managers.Vector.DegreeToVector(this.rotation).y * 0.1;
            }
            //Else if in range, move fast
            else
            {
                this.x += managers.Vector.DegreeToVector(this.rotation).x * 0.3;
                this.y += managers.Vector.DegreeToVector(this.rotation).y * 0.3;
            }
        }     
    }
}