module objects {
    export class Zombie extends objects.GameObject
    {
        // PRIVATE INSTANCE VARIBALES
        private target: objects.Player;
        private range: number = 200;
        private spawnMax = 5;
        private spawnMin = -1;

        //Public Properties
        public health: number;

        // CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue, target:objects.Player) {
            super(assetManager, "zombie");
            this.target = target;
            this.Start();
        }

        //PUBLIC METHODS
        public Start()                  
        {
            this.generateHealth();
            this.Reset();
        }
        public Update()                 
        {
            this.CheckBounds()
            this.ChasePlayer();
        }
        public Reset():void 
        {
            this.generateHealth();
            let borderRandNum = Math.random();
            let spawnPoint = new managers.Vector(0, 0);
            //console.log(borderRandNum);

            if (borderRandNum >0.75)
            {
                //Spawn Top
                spawnPoint.x = (Math.random() * config.Screen.WIDTH)+(this.spawnMax- this.spawnMin)+this.spawnMin ;
                spawnPoint.y = -0.1 * config.Screen.HEIGHT;
                //console.log("Spawned top"+ spawnPoint.y);
            }
            else if (borderRandNum > 0.5)
            {
                //Spaen Left
                spawnPoint.x = -0.1 * config.Screen.WIDTH;
                spawnPoint.y = Math.random() * config.Screen.HEIGHT;
            }
            else if (borderRandNum > 0.25) {
                //Spawn Right
                spawnPoint.x = 1.1 * config.Screen.WIDTH;
                spawnPoint.y = Math.random() * config.Screen.HEIGHT;
            } else {
                //Spwan Bottom
                spawnPoint.x = Math.random() * config.Screen.WIDTH;
                spawnPoint.y = 1.1 * config.Screen.HEIGHT;
            }

            this.x = spawnPoint.x;
            this.y = spawnPoint.y;
            
        }

        // PRIVATE METHODS  
        private generateHealth()
        {
            this.zombieHealth = Math.random()* (10- 5)+ 5 ;
        }

        private generateNormalSpeed()
        {
            return Math.random()* (0.2- 0.03)+ 0.03 ;
        }
        private generateCloseSpeed()
        {
            return Math.random()* (0.5- 0.2)+ 0.2 ;
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
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
            //Else if in range, move fast
            else
            {
                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateCloseSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateCloseSpeed();
            }
        }     
    }
}