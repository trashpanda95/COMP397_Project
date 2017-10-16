module scenes {
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE VARIABLES 
        private assetManager: createjs.LoadQueue;
        private player:objects.Player;
        private zombie:objects.Zombie[];

        // PUBLIC PROPETIES

        // CONSTRUCTORS
        constructor(assetManager:createjs.LoadQueue, currentScene: number)
        {
            super();
            this.assetManager = assetManager;
            this.currentScene = currentScene;
            this.Start(); 
        }

        // PUBLIC METHODS
        public Start():void
        {
            this.player = new objects.Player(this.assetManager);
            this.zombie = new Array<objects.Zombie>();
            this.Main();
        }

        public Update():number
        {
            this.player.Update();
            this.zombie.forEach(zombies =>
            {
                zombies.Update();
                this.zombieFollowPlayer(zombies);
                zombies.rotation = ((Math.atan2(zombies.x- this.player.y, zombies.x- this.player.x) * (180/ Math.PI)) - 180);                                          
            });
            return this.currentScene;
        }

        public Main():void
        {
            this.addChild(this.player);                                     //Add Player

            for (let count = 0; count < 10; count++)
            {
                this.zombie[count] = new objects.Zombie(this.assetManager);      
                //this.zombie[count].x = Math.floor(Math.random() * 800) + 800;
                //this.zombie[count].y = Math.floor(Math.random() * 600) + 600;
                console.log();
                this.addChild(this.zombie[count]);                          // Add Zombies
            }
        }
        // PRIVATE METHOD

        private zombieFollowPlayer(other:objects.GameObject)                // Method for zombies to follow player position
        {
            if (this.player.x != other.x)                                   // If player x coordinate is not the same as the zombie's x coordinate
            {
                if(this.player.x > other.x)                                 // Checking if player x coords is greater than zombie's x coord
                {
                    other.x += other.zombieSpeed;   
                }
                else                                                        // Checks if the x coord is less than the zombie's
                {
                    other.x -= other.zombieSpeed;
                }
                if(this.player.y > other.y)                                 // Checks if player y coords is greater than zombie's y coords
                {
                    other.y += other.zombieSpeed;   
                }
                else                                                        // Checks if the y coords are less than the zombie's
                {
                    other.y -= other.zombieSpeed;
                }
            }
        }

        
        private checkPrimCollision (other:objects.GameObject){              // Primary Collision Check

            let pos1 : createjs.Point = new createjs.Point(this.player.x,this.player.y);
            let pos2: createjs.Point = other.position;

            if ((Math.sqrt(Math.pow(pos2.x - pos1.x, 2)+ Math.pow(pos2.y - pos1.y, 2))) <
                (this.player.halfHeight + other.halfHeight)){
                    if (!other.isColliding) {                                   // If no collision with player
                        other.isColliding = false;
                        if (other.name == "zombie"){
                            // Check if bullet hit
                        }
                    } else {                                                    // If collision with player is true
                        other.isColliding = true;
                        this.player.setHealth(this.player.getHealth() - 1);     // Apply damage onto the player if there is collision
                        if (this.player.getHealth() <= 0) {                     // Checks if HP is <= ZERO
                            this.currentScene = config.END;                     // Stops the scene if player's HP is at ZERO
                        
                        }
                }
            }
            
        }
    }
}