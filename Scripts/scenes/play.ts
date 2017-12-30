module scenes {
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE VARIABLES 
        private assetManager: createjs.LoadQueue;

        // PLAYER RELATED VARIABLES
        private player:objects.Player;
        private playerHealth:objects.Label;

        // ZOMBIE RELATED VARIABLES
        private zombie:objects.Zombie[];

        private collision: core.Collision;

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
            // Add Player to Scene
            this.player = new objects.Player(this.assetManager);        // Initialize Player
                   
            // Add Zombies to Scene
            this.zombie = new Array<objects.Zombie>();                  // Initialize Zombie Array


            // Add Collision
            this.collision = new core.Collision(this.player);           // Initialize Collision

            //Add Labels
            this.playerHealth = new objects.Label("Health: " +this.player.health, "20px","Verdana", "#000000", 20, 560, false);    // Display Health Points - mod. 10/16/17
            
            this.Main();
        }

        public Update():number
        {
            this.player.Update();

            // Update Zombies on Scene
            this.zombie.forEach(zombies =>
            {
                zombies.Update();
                this.zombieFollowPlayer(zombies);
                zombies.rotation = ((Math.atan2(zombies.x- this.player.y, zombies.x- this.player.x) * (180/ Math.PI)) - 180);
                this.collision.checkCollision(zombies);
            });              

            // Update the Labels on Scene
            this.updateLabels();

            // Check if the Player is still Alive
            if (this.player.isAlive == false)
            {
                this.currentScene = config.Scene.END;
                this.removeAllChildren();
            }  

            return this.currentScene;
        }

        public Main():void
        {      
            this.addChild(this.player);                                     // Add Player Model onto Scene
            this.addChild(this.playerHealth);                               // Add Player Health onto Scene
            for (let count = 0; count < 10; count++)
            {
                this.zombie[count] = new objects.Zombie(this.assetManager);      
                this.zombie[count].x = Math.floor(Math.random() * 800);
                this.zombie[count].y = Math.floor(Math.random() * 600);
                console.log();
                this.addChild(this.zombie[count]);                          
            }
        }

        // PRIVATE METHOD

        private updateLabels()
        {
            this.playerHealth.text = "Health: "+this.player.health;
        }
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
    }
}