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
        private collision: core.Collision;

        private zombieCount: number =5;
        private bulletNum: number =10;
        private bulletCounter: number=0;
        private timeTillSpawn = 60000;
        private lastSpawn = -1;
        private time = Date.now();
        private fired: boolean;

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
            this.lastSpawn = this.time;

            // Add Bullets
            this.bullet = new Array<objects.Bullet>();
            this.bulletSpawn();

            //Add Collision
            this.collision = new core.Collision(this.player);

            //Add Labels
            this.playerHealth = new objects.Label("Health: " +this.player.health, "20px","Verdana", "#000000", 20, 560, false);    
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
            this.time = Date.now();
            
            //Update Zombie
            
            /* if (this.time > (this.lastSpawn+ this.timeTillSpawn)) 
            {
                console.log(this.time)
                this.lastSpawn = this.time;               
            } */
            /* this.zombie.forEach(zombies =>
            {
                zombies.Update();             
                this.collision.checkCollision(zombies);            
            }); */   

            //Update bullet
            this.bullet.forEach(bullet => 
            {
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
            count = 0;
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
            this.bullet[this.bulletCounter].fired = true;
            this.bullet[this.bulletCounter].bulletRotation = this.player.playerRotation;
    
            this.bulletCounter++;
            if(this.bulletCounter >= this.bulletNum -1) 
            {
              this.bulletCounter = 0;
            }
        }

        private updateLabels()
        {
            this.playerHealth.text = "Health: "+this.player.health;
        }
        
    }
}