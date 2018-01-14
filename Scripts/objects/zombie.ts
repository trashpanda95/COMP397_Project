module objects {
    export class Zombie extends objects.GameObject
    {
        // PRIVATE INSTANCE VARIBALES
        private targetPlayer: objects.Player;
        private targetWindowLeft_level1: objects.WindowLeft;
        private targetWindowRight_level1: objects.WindowRight;
        private targetWindowLeft_level2: objects.WindowLeft_Level2;
        private targetWindowRight_level2: objects.WindowRight_Level2;
        private range: number = 200;
        private spawnMax = 400;
        private spawnMin = 50;
        private spawnPoint: managers.Vector;
        public windowReached: boolean;

        //Public Properties
        public health: number;

        // CONSTRUCTORS
        constructor(targetPlayer:objects.Player, targetWindowLeft_level1: objects.WindowLeft, targetWindowRight_level1: objects.WindowRight, targetWindowLeft_level2: objects.WindowLeft_Level2,
        targetWindowRight_level2: objects.WindowRight_Level2) {
            super("zombie");
            this.targetPlayer = targetPlayer;
            this.targetWindowLeft_level1 = targetWindowLeft_level1;
            this.targetWindowRight_level1 = targetWindowRight_level1;
            this.targetWindowLeft_level2 = targetWindowLeft_level2;
            this.targetWindowRight_level2 = targetWindowRight_level2;

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
            if (this.targetPlayer.currentScene =="level1") 
            {
                if (this.y < this.targetWindowRight_level1.y-this.height && this.windowReached)
                {
                    this.ChasePlayer();
                } 
                else if (this.y >this.targetWindowRight_level1.y-this.height && this.windowReached)
                {
                    this.y -= this.generateNormalSpeed();
                }
                if (this.x > this.targetWindowLeft_level1.x + this.halfWidth && this.windowReached) 
                {
                    this.ChasePlayer();
                }
                else if (this.x < this.targetWindowLeft_level1.x + this.halfWidth && this.windowReached)
                {
                    this.x += this.generateNormalSpeed();
                }
                else 
                {
                    this.setDestination();
                }    
            }
            if (this.targetPlayer.currentScene =="level2") 
            {
                if (this.y < this.targetWindowRight_level2.y-this.height && this.windowReached)
                {
                    this.ChasePlayer();
                } 
                else if (this.y >this.targetWindowRight_level2.y-this.height && this.windowReached)
                {
                    this.y -= this.generateNormalSpeed();
                }
                if (this.x > this.targetWindowLeft_level2.x + this.halfWidth && this.windowReached) 
                {
                    this.ChasePlayer();
                }
                else if (this.x < this.targetWindowLeft_level2.x + this.halfWidth && this.windowReached)
                {
                    this.x += this.generateNormalSpeed();
                }
                else 
                {
                    this.setDestination();
                }    
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
            return Math.random()* (0.3- 0.01)+ 0.01 ;
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
            if (this.targetPlayer.currentScene =="level1")
            {
                this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector (this.targetWindowLeft_level1.x, this.targetWindowLeft_level1.y));

                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
            if (this.targetPlayer.currentScene =="level2")
            {
                this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector (
                    this.targetWindowLeft_level2.x, this.targetWindowLeft_level2.y));

                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
            
        } 
        private headTowardsRightWindow()
        {
            //Zombie rotation
            if (this.targetPlayer.currentScene =="level1")
            {
                this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector (this.targetWindowRight_level1.x, this.targetWindowRight_level1.y));

                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
            if (this.targetPlayer.currentScene =="level2")
            {
                this.rotation = managers.Vector.RotateTowardPosition(new managers.Vector(this.x, this.y), new managers.Vector (this.targetWindowRight_level2.x, 
                    this.targetWindowRight_level2.y));

                this.x += managers.Vector.DegreeToVector(this.rotation).x * this.generateNormalSpeed();
                this.y += managers.Vector.DegreeToVector(this.rotation).y * this.generateNormalSpeed();
            }
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

    }
}