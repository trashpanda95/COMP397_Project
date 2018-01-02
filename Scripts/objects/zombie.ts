module objects {
    export class Zombie extends objects.GameObject
    {
        // PRIVATE INSTANCE VARIBALES
        private targetPlayer: objects.Player;
        private targetWindowLeft: objects.WindowLeft;
        private targetWindowRight: objects.WindowRight;
        private range: number = 200;
        private spawnMax = 400;
        private spawnMin = 50;
        private spawnPoint: managers.Vector;
        public windowReached: boolean;

        //Public Properties
        public health: number;

        // CONSTRUCTORS
        constructor(targetPlayer:objects.Player, targetWindowLeft: objects.WindowLeft, targetWindowRight: objects.WindowRight) {
            super("zombie");
            this.targetPlayer = targetPlayer;
            this.targetWindowLeft = targetWindowLeft;
            this.targetWindowRight = targetWindowRight;
            this.Start();
        }

        //PUBLIC METHODS
        public Start()                  
        {
            this.regXY();
            this.generateHealth();
            this.Reset();
        }
        public Update()                 
        {
            if (this.windowReached)
            {
                this.enterHouseLeft();
                this.enterHouseRight();
            }
            else {
                this.setDestination();
            }    
        }
        public Reset():void 
        {
           this.generateHealth();
           this.zombieSpawnPoint();   
           this.windowReached =false;  
        }

        // PRIVATE METHODS  
        private regXY(): void  
        {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width /2;
            this.halfHeight = this.height /2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
        private generateHealth()
        {
            this.zombieHealth = Math.random()* (8- 5)+ 5 ;
        }
        private generateNormalSpeed()
        {
            return Math.random()* (0.2- 0.03)+ 0.03 ;
        }
        private generateCloseSpeed()
        {
            return Math.random()* (0.5- 0.2)+ 0.2 ;
        }  
        private ChasePlayer()                
        {
            //Zombie rotation
            this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector (this.targetPlayer.x, this.targetPlayer.y));

            //If player is not in range, move slowly
            if (new managers.Vector(this.targetPlayer.x, this.targetPlayer.y).Add(new managers.Vector(-this.x, -this.y)).Magnitude() > this.range) 
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
        private headTowardsLeftWindow()
        {
            //Zombie rotation
            this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector (this.targetWindowLeft.x, this.targetWindowLeft.y));

                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
        } 
        private headTowardsRightWindow()
        {
            //Zombie rotation
            this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector (this.targetWindowRight.x, this.targetWindowRight.y));

                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
        }
        private zombieSpawnPoint()
        {
            let borderRandNum = Math.random();
            this.spawnPoint = new managers.Vector(0, 0);

            /* if (borderRandNum >0.75)
            {
                //Spawn Top
                this.spawnPoint.x = (Math.random() * config.Screen.WIDTH)+(this.spawnMax- this.spawnMin)+this.spawnMin ;
                this.spawnPoint.y = ((config.Screen.HEIGHT*-0.1) - (Math.random()* (this.spawnMax- this.spawnMin)+ this.spawnMin)); 
                console.log("Spawned Top "+ this.spawnPoint.y);
            }  
            else if (borderRandNum > 0.25) 
            {
                //Spawn Right
                this.spawnPoint.x = ((config.Screen.WIDTH) + (Math.random()* (this.spawnMax- this.spawnMin)+ this.spawnMin)); 
                this.spawnPoint.y = (Math.random() * config.Screen.HEIGHT) + (this.spawnMax- this.spawnMin)+this.spawnMin;
                console.log("Spawned Right "+ this.spawnPoint.x); 
            }*/ 

            if (borderRandNum > 0.5)
            {
                //Spawn Left
                this.spawnPoint.x = ((config.Screen.WIDTH*-0.1) - (Math.random()* (this.spawnMax- this.spawnMin)+ this.spawnMin)); 
                this.spawnPoint.y = (Math.random() * config.Screen.HEIGHT) + (this.spawnMax- this.spawnMin)+this.spawnMin;
                console.log("Spawned Left "+ " X: "+ this.spawnPoint.x+ " Y: "+ this.spawnPoint.y);
            }
            else {
                //Spwan Bottom Right 
                this.spawnPoint.x =(config.Screen.WIDTH/2)+ (Math.random()* (this.spawnMax- this.spawnMin)+ this.spawnMin);
                this.spawnPoint.y = (config.Screen.HEIGHT)+  (Math.random()*(this.spawnMax- this.spawnMin)+ this.spawnMin);    
                console.log("Spawned Bottom "+ " X: "+ this.spawnPoint.x+ " Y: "+ this.spawnPoint.y);
            }

            this.x = this.spawnPoint.x;
            this.y = this.spawnPoint.y;
        }
        private setDestination()
        {
            /* //BOTTOM LEFT
            if(this.spawnPoint.x < (config.Screen.WIDTH/2) && this.spawnPoint.y > (config.Screen.HEIGHT/2))
            {
                this.headTowardsWindow();
            }
            //TOP RIGHT
            if(this.spawnPoint.x > (config.Screen.WIDTH/2) && this.spawnPoint.y < (config.Screen.HEIGHT/2))
            {
                this.headTowardsRightWindow();
            } */
            //LEFT
            if (this.spawnPoint.x < (config.Screen.WIDTH/2))
            {
                this.headTowardsLeftWindow();
            }

            //RIGHT
            if(this.spawnPoint.x > (config.Screen.WIDTH/2) 
            && this.spawnPoint.y > (config.Screen.HEIGHT/2))
            {
                this.headTowardsRightWindow();
            }
        }

        private enterHouseRight()
        {
            if (this.y <= this.targetWindowRight.y + this.halfHeight)
            {
                this.ChasePlayer();
            } 
            else {this.y -= this.generateNormalSpeed();}  
        }
        private enterHouseLeft()
        {
            if (this.x >= this.targetWindowLeft.x + this.halfWidth) {
                this.ChasePlayer();
            }
            else {
                this.x += this.generateNormalSpeed();
            }
        }

        
    }
}