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

        //Walls
        private leftWallTop: objects.LeftWallTop;
        private leftWallBottom: objects.LeftWallBottom;
        private topWall: objects.WallTop;
        private bottomWall: objects.WallBottom;
        private rightWallBath: objects.WallRightBath;
        private mainGateWallLeft: objects.MainGateWallLeft;
        private mainGateWallRight: objects.MainGateWallRight;
        private rightWall: objects.RightWall;
        private insideHorizontalWall: objects.InsideHorizontalWall;
        private insideVerticalWall: objects.InsideVerticalWall;

        //Windows
        private leftWindow: objects.WindowLeft;
        private rightWindow: objects.WindowRight;

        private playerHealth:objects.Label;
        private collision: managers.Collision;

        private zombieCount: number =10;
        private bulletNum: number =10;
        private bulletCounter: number=0;

        private bgMap: objects.Bgmap;

        // PUBLIC PROPETIES

        // CONSTRUCTORS
        constructor( currentScene: number, gameCanvas:HTMLElement)
        {
            super();
            this.currentScene = currentScene;
            this.mouseEnabled = true;
            this.gameCanvas = gameCanvas;

            this.Start(); 
        }

        // PUBLIC METHODS
        public Start():void
        {         
            //Add Background Map
            this.bgMap = new objects.Bgmap("level1BG");
            this.addChild(this.bgMap);

            //Add Left Wall Top
            this.leftWallTop = new objects.LeftWallTop();
            this.addChild(this.leftWallTop);

            //Add Left Wall Bottom
            this.leftWallBottom = new objects.LeftWallBottom();
            this.addChild(this.leftWallBottom);

            //Add Top Wall
            this.topWall = new objects.WallTop();
            this.addChild(this.topWall);
            
            //Add Bottom Wall
            this.bottomWall = new objects.WallBottom();
            this.addChild(this.bottomWall);

            //Add Right Bath Wall
            this.rightWallBath = new objects.WallRightBath();
            this.addChild(this.rightWallBath);
            
            //Add Main Gate Wall Left
            this.mainGateWallLeft = new objects.MainGateWallLeft();
            this.addChild(this.mainGateWallLeft);

            //Add Main Gate Wall Right
            this.mainGateWallRight = new objects.MainGateWallRight();
            this.addChild(this.mainGateWallRight);

            //Add Wall Right
            this.rightWall = new objects.RightWall();
            this.addChild(this.rightWall);

            //Add Inside Horizontal Wall
            this.insideHorizontalWall = new objects.InsideHorizontalWall();
            this.addChild(this.insideHorizontalWall);

            //Add Inside Vertical Wall
            this.insideVerticalWall = new objects.InsideVerticalWall();
            this.addChild(this.insideVerticalWall);

            //Add Left Window
            this.leftWindow = new objects.WindowLeft();
            this.addChild(this.leftWindow);

            //Add Right Window
            this.rightWindow = new objects.WindowRight();
            this.addChild(this.rightWindow);

            //Add Player
            this.player = new objects.Player();
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

            //Check collision with wall+ player
            this.collision.checkCollisionWall(this.player, this.leftWallTop);
            this.collision.checkCollisionWall(this.player, this.leftWallBottom);
            this.collision.checkCollisionWall(this.player, this.topWall);
            this.collision.checkCollisionWall(this.player, this.bottomWall);
            this.collision.checkCollisionWall(this.player, this.rightWallBath);
            this.collision.checkCollisionWall(this.player, this.mainGateWallLeft);
            this.collision.checkCollisionWall(this.player, this.mainGateWallRight);
            this.collision.checkCollisionWall(this.player, this.rightWall);
            this.collision.checkCollisionWall(this.player, this.insideHorizontalWall);
            this.collision.checkCollisionWall(this.player, this.insideVerticalWall);
            
            //Update Zombie
            this.zombie.forEach(zombies =>
            {
                zombies.Update();    
                //Checks collision with the player and each zombie         
                this.collision.checkCollision(this.player, zombies);   
                //Checks collision with other zombies
                this.collision.collisionPushBack(zombies, zombies);   
                //Check collision with wall+ zombie
                this.collision.checkCollisionWall(zombies, this.leftWallTop);
                this.collision.checkCollisionWall(zombies, this.leftWallBottom);
                this.collision.checkCollisionWall(zombies, this.topWall);
                this.collision.checkCollisionWall(zombies, this.bottomWall);
                this.collision.checkCollisionWall(zombies, this.rightWallBath);
                this.collision.checkCollisionWall(zombies, this.mainGateWallLeft);
                this.collision.checkCollisionWall(zombies, this.mainGateWallRight);
                this.collision.checkCollisionWall(zombies, this.rightWall);
                this.collision.checkCollisionWall(zombies, this.insideHorizontalWall);
                this.collision.checkCollisionWall(zombies, this.insideVerticalWall);      
                this.collision.checkCollision(zombies, this.leftWindow);   
                this.collision.checkCollision(zombies, this.rightWindow);  
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
                this.zombie[count] = new objects.Zombie(this.player, this.leftWindow, this.rightWindow);      
                this.addChild(this.zombie[count]);                          
            }
        }
        //Bullet
        private bulletSpawn():void
        {
            for (let count= 0; count < this.bulletNum; count++)
            {
                this.bullet[count] = new objects.Bullet();      
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