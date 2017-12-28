module scenes {
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE VARIABLES 
        private assetManager: createjs.LoadQueue;
        private mouse: managers.Mouse;
        public gameCanvas:HTMLElement;

        private player:objects.Player;
        private zombie:objects.Zombie[];
        private bullet: objects.Bullet[];

        private playerHealth:objects.Label;
        private collision: managers.Collision;

        private zombieCount: number =10;
        private bulletNum: number =10;
        private bulletCounter: number=0;

        // PUBLIC PROPETIES

        // CONSTRUCTORS
        constructor(assetManager:createjs.LoadQueue, currentScene: number, gameCanvas:HTMLElement)
        {
            super();
            this.assetManager = assetManager;
            this.currentScene = currentScene;
            this.mouseEnabled = true;
            this.gameCanvas = gameCanvas;

            this.Start(); 
        }

        // PUBLIC METHODS
        public Start():void
        {         
            //Add Player
            this.player = new objects.Player(this.assetManager);
            this.addChild(this.player); 
                   
            // Add Zombies
            this.zombie = new Array<objects.Zombie>();
            this.zombieSpawn();

            // Add Bullets
            this.bullet = new Array<objects.Bullet>();
            this.bulletSpawn();

            //Add Collision
            this.collision = new managers.Collision();

            //Add Labels
            this.playerHealth = new objects.Label("Health: " +this.player.playerHealth, "20px","Verdana", "#000000", 20, 560, false);    
            this.addChild(this.playerHealth);

            //Add Mouse Listener
            this.mouse = new managers.Mouse(this.player, this.gameCanvas);
            this.mouse.AddClickListener((event)=> 
            {
                //Add Bullets
                this.bulletFire();
            });
        }

        public Update():number
        {
            //Update Player
            this.player.Update();
            
            //Update Zombie
            this.zombie.forEach(zombies =>
            {
                zombies.Update();    
                //Checks collision with the player and each zombie         
                this.collision.checkCollision(this.player, zombies);         
            });  

            //Checks collisions between each zombie and each bullet
            this.zombie.forEach(zombie=> {
                 this.bullet.forEach(bullet => {
                    this.collision.checkCollision(zombie, bullet);     
                 });
            });

            //Update bullet
            this.bullet.forEach(bullet => 
            {
                //Update Bullet
                bullet.Update(); 
            });
                    
            //Update Labels           
            this.updateLabels();
            
            //Change Scene Condition
            if (this.player.isAlive == false)
            {
                this.currentScene = config.Scene.END;
                this.removeAllChildren();
            }  
            return this.currentScene;
        }

        // PRIVATE METHODS
        private zombieSpawn()
        {  
            let count;
            for (count= 0; count < this.zombieCount; count++)
            {
                this.zombie[count] = new objects.Zombie(this.assetManager, this.player);      
                this.addChild(this.zombie[count]);                          
            }
        }

        //Bullet
        private bulletSpawn():void
        {
            for (let count= 0; count < this.bulletNum; count++)
            {
                this.bullet[count] = new objects.Bullet(this.assetManager);      
                this.addChild(this.bullet[count]);                          
            }
        }
        private bulletFire():void
        {
            this.bullet[this.bulletCounter].x = this.player.bulletSpawn.x;
            this.bullet[this.bulletCounter].y = this.player.bulletSpawn.y;
            this.bullet[this.bulletCounter].gunFired = true;
            this.bullet[this.bulletCounter].bulletCollided = true;
            this.bullet[this.bulletCounter].bulletRotation = this.player.playerRotation;
    
            this.bulletCounter++;
            if(this.bulletCounter >= this.bulletNum -1) 
            {
              this.bulletCounter = 0;
            }
        }

        private updateLabels()
        {
            this.playerHealth.text = "Health: "+ this.player.playerHealth;
        }
        
    }
}