module scenes {
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE VARIABLES --------------------------------------------------------------------------------------->
        private assetManager: createjs.LoadQueue;
        private player:objects.Player;
        private zombie:objects.Zombie[];

        // PUBLIC PROPETIES --------------------------------------------------------------------------------------->

        // CONSTRUCTORS --------------------------------------------------------------------------------------->
        constructor(assetManager:createjs.LoadQueue, currentScene: number)
        {
            super();
            this.assetManager = assetManager;
            this.currentScene = currentScene;
            this.Start(); 
        }

        

        // PUBLIC METHODS --------------------------------------------------------------------------------------->
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
                zombies.rotation = (Math.atan2(zombies.x- this.player.y, zombies.x- this.player.x) * (180/ Math.PI)) - 180; 
                zombies.Update();               
                this.zombieFollowPlayer(zombies);
            });
            return this.currentScene;
        }

        public Main():void
        {
            this.addChild(this.player);

            for (let count = 0; count < 10; count++)
            {
                this.zombie[count] = new objects.Zombie(this.assetManager);
                this.addChild(this.zombie[count]);
                this.zombie[count].x = Math.floor(Math.random() * (800-0 + 1)+ 0);
                this.zombie[count].y = Math.floor(Math.random() * (800-0 + 1)+ 0);
            }
        }
        // PRIVATE METHOS --------------------------------------------------------------------------------------->

        private zombieFollowPlayer(other:objects.GameObject)                // Method for zombies to follow player position
        {
            if (this.player.x != other.x)                                   // If player x coordinate is not the same as the zombie's x coordinate
            {
                if(this.player.x > other.x)                                 // Checking if player x coords is greater than zombie's x coord
                {
                    other.x += 0.1;   
                }
                else                                                        // Checks if the x coord is less than the zombie's
                {
                    other.x -= 0.1;
                }
                if(this.player.y > other.y)                                 // Checks if player y coords is greater than zombie's y coords
                {
                    other.y += 0.1;   
                }
                else                                                        // Checks if the y coords are less than the zombie's
                {
                    other.y -= 0.1;
                }
            }
        }
    }
}