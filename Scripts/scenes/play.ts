module scenes {
    export class Play extends objects.Scene
    {
        // Public Variables
        public gameCanvas:HTMLElement;

        // PRIVATE INSTANCE VARIABLES 
        private assetManager: createjs.LoadQueue;
        private mouse: managers.Mouse;

        // Main Actors
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

        // Left Window
        private leftWindow: objects.WindowLeft;

        // Left Window Health Labels
        private leftWindowHealth:objects.Label;
        private leftWindowHealthOutline:objects.Label;

        // Right Window
        private rightWindow: objects.WindowRight;

        // Right Window Health Labels
        private rightWindowHealth:objects.Label;
        private rightWindowHealthOutline:objects.Label;

        // Player's Labels
        //private playerHealth:objects.Label;
        //private playerHealthOutline:objects.Label;

        // Collision
        private collision: managers.Collision;

        // Zombie Counter
        private zombieCount: number = 10;

        // Bullet Variables
        private bulletNum: number =20;
        private bulletCounter: number=0;
        private bulletLabel:objects.Label;
        private bulletLabelOutline:objects.Label;
        private allowBulletFire:boolean = true;

        // Reload Label
        private reloadBulletLabel:objects.Label;       
        private reloadBulletLabelOutline:objects.Label;
        // Keyboard Manager
        private keyboardInput:managers.keyBoardInput;

        private bgMap: objects.Bgmap;
        private buildLabel:objects.Label;

        private killCountLabel:objects.Label;

        private healthbar:createjs.Shape;
        private healthbarLeftWindow:createjs.Shape;
        private healthbarRightWindow:createjs.Shape;
        
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

            // Set Left Window's Health Label
            //this.leftWindowHealth = new objects.Label(""+this.leftWindow.windowLeftHealth+"/100", "12px","Verdana", "#FFFFFF", this.leftWindow.x-25, this.leftWindow.y-6, false);
            //this.addChild (this.leftWindowHealth);

            //Add Right Window
            this.rightWindow = new objects.WindowRight();
            this.addChild(this.rightWindow);

            // Set Right Window's Health Label
            //this.rightWindowHealth = new objects.Label(""+this.rightWindow.windowRightHealth+"/100", "12px","Verdana", "#FFFFFF", this.rightWindow.x-25, this.rightWindow.y-6, false);
            //this.addChild (this.rightWindowHealth);

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

            // Keyboard Input
            this.keyboardInput = new managers.keyBoardInput();

            // Player's Health Label
            //this.playerHealth = new objects.Label("Health: " +this.player.playerHealth, "20px","Verdana", "#000000", 20, 640, false);    
            //this.playerHealthOutline = new objects.Label("Health: " +this.player.playerHealth, "20px","Verdana", "#FFFFFF", 20, 640, false);
            
            // Bullet Label
            this.killCountLabel = new objects.Label("Kills: " +this.collision.killCount, "20px","Verdana", "#ffffff", 850, 25, false); 

            this.bulletLabel = new objects.Label("Bullets: " +(this.bulletNum - this.bulletCounter), "20px","Verdana", "#ffffff", 20, 25, false); 
            // Reload Labels
            this.reloadBulletLabel = new objects.Label("Press CTRL to Reload", "20px","Verdana", "#ffffff", (config.Screen.WIDTH/5)*2.2, (config.Screen.HEIGHT/4)*3, false);

            // Fixing Window Labels
            this.buildLabel= new objects.Label("Press R or 0 to Fsix Window", "20px","Verdana", "#ffffff", (config.Screen.WIDTH/5)*1.8, (config.Screen.HEIGHT/4)*3, false);
            //this.fixWindowLabelOutline = new objects.Label("Press NUM PAD ZERO to Fix Windows", "20px","Verdana", "#FFFFFF", (config.Screen.WIDTH/5)*1.8, (config.Screen.HEIGHT/4)*3, false);


            // Set Label outlines to True
            //this.playerHealthOutline.outline = 1;
            //this.bulletLabelOutline.outline = 1; 
            //this.fixWindowLabelOutline.outline = 1;
            //this.reloadBulletLabelOutline.outline = 1;

            // Add Labels onto Scene
            this.addChild(this.bulletLabel);
            this.addChild(this.killCountLabel);
            this.addChild(this.bulletLabelOutline);


            //Add Mouse Listener
            this.mouse = new managers.Mouse(this.player, this.gameCanvas);
            this.mouse.AddClickListener((event)=> 
            {
                // Bullet is Fired, Activate Method BulletFire()
                this.bulletFire();
            });

            // Health Bar Related Initiations
            this.healthbar = new createjs.Shape();
            this.addChild(this.healthbar);    
            
            this.healthbarLeftWindow = new createjs.Shape();
            this.addChild(this.healthbarLeftWindow);

            this.healthbarRightWindow = new createjs.Shape();
            this.addChild(this.healthbarRightWindow);
        }

        public Update():number
        {

            // Update Player
            this.player.Update();

            // Check collision with wall+ player
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
            this.collision.checkCollision(this.player, this.leftWindow);
            this.collision.checkCollision(this.player, this.rightWindow);
            
            // Update Zombie
            this.zombie.forEach(zombies =>
            {
                zombies.Update();    
                // Checks collision with the player and each zombie         
                this.collision.checkCollision(this.player, zombies);   
                // Check collision with wall+ zombie
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

            // Checks collisions between each zombie and each bullet
            this.zombie.forEach(zombie=> {
                 this.bullet.forEach(bullet => {
                    this.collision.checkCollision(zombie, bullet);   
                 });
            });

            // Update bullet
            this.bullet.forEach(bullet => 
            {
                //Update Bullet
                bullet.Update(); 
            });
                    
            // Update Labels           
            //this.updateLabels();
            
            // Change Scene Condition
            if (this.player.isAlive == false)
            {
                this.currentScene = config.Scene.END;
                this.removeAllChildren();
            }  

            if (!this.allowBulletFire){

                // Reload Prompt for the User
                this.addChild(this.reloadBulletLabel);

                // Reload Method
                this.reloadBullet();
            }

            if (this.leftWindow.buildWindow || this.rightWindow.buildWindow)
            {
                this.addChild(this.buildLabel);
            }
            else (this.removeChild(this.buildLabel))
            this.updateHealthBar();
            this.updateLabels();
            this.updateHealthBarLeftWindow();
            this.updateHealthBarRightWindow();
            return this.currentScene;
        }

        // PRIVATE METHODS

        // Spawn Zombies onto the Scene
        private zombieSpawn()
        {  
            let count;
            for (count= 0; count < this.zombieCount; count++)
            {
                this.zombie[count] = new objects.Zombie(this.player, this.leftWindow, this.rightWindow);      
                this.addChild(this.zombie[count]);                          
            }
        }
        // Spawn Bullets onto the Scene
        private bulletSpawn():void
        {
            for (let count= 0; count <= this.bulletNum; count++)
            {
                this.bullet[count] = new objects.Bullet();      
                this.addChild(this.bullet[count]);                          
            }
        }
        private bulletFire():void
        {
            if (this.allowBulletFire)                   // Stops Player from Generating bullets if not reloaded
            {
            // Sets Bullet Spawn to Player's Location
            this.bullet[this.bulletCounter].x = this.player.bulletSpawn.x;
            this.bullet[this.bulletCounter].y = this.player.bulletSpawn.y;
            this.bullet[this.bulletCounter].gunFired = true;
            this.bullet[this.bulletCounter].bulletCollided = true;
            this.bullet[this.bulletCounter].bulletRotation = this.player.playerRotation;
    
            this.bulletCounter++;
            }
            // Resets Bullet Counter
            if(this.bulletCounter >= this.bulletNum) 
            {
                //console.log ("allBulletFire set to False;");                          // Debugger
                this.allowBulletFire = false;           // Stops Player from continued shooting after 0 bullets
                this.bulletCounter = this.bulletNum;    // Reset bullet to the max amount to stop counter from going over array index
                //console.log ("bulletCounter set to: "+this.bulletCounter);            // Debugger

            }
        }
        private reloadBullet ():void
        {
            var getKey = this.keyboardInput.getkeyInput();          // Get Keyboard Input from Player
            //console.log("Display Key: "+getKey);                  // Debugger
            if (getKey != null && getKey == config.Key.CTRL)        // If the key pressed is LEFT_CTRL
            {
                //console.log ("Reloading Bullets");                // Debugger
                this.resetBulletCounter();
                
                // Remove Reload Prompt
                this.removeChild(this.reloadBulletLabel);
                this.removeChild(this.reloadBulletLabelOutline);
            }
        }
        // Resets the Bullet Counter to Zero
        private resetBulletCounter ():void
        {
            this.bulletCounter = 0;
            //console.log ("bulletCounter has been reset to: "+this.bulletCounter)        // debugger - Checking to see if bulletCounter was reset
            // Re-Enable the Player to Shoot again
            this.allowBulletFire = true;
            //console.log ("allowBulletFire is re-Enabled");                              // debugger - checking to see if allowBulletFire was re-enabled
        }

        // Update Current Labels on Screen
        private updateLabels():void
        {
           // this.bulletLabel.text = "Bullets: "+ (this.bulletNum - this.bulletCounter)+"/20";
            //this.bulletLabelOutline.text = "Bullets: "+ (this.bulletNum - this.bulletCounter)+"/20";        // Add Outline
            //this.playerHealth.text = "Health: "+ this.player.playerHealth;
            //this.playerHealthOutline.text = "Health: "+ this.player.playerHealth;
            this.bulletLabel.text = "Bullets: "+ (this.bulletNum - this.bulletCounter)+"/20";
            this.killCountLabel.text = "Kills:  "+ this.collision.killCount;
            //this.bulletLabelOutline.text = "Bullets: "+ (this.bulletNum - this.bulletCounter)+"/20";
            //this.leftWindowHealth.text = "" +(this.leftWindow.windowLeftHealth) + "/100";
            //this.rightWindowHealth.text = "" +(this.rightWindow.windowRightHealth)+"/100";
            //this.leftWindowHealth.text = "" +(this.leftWindow.windowLeftHealth) + "/1000";
            //this.rightWindowHealth.text = "" +(this.rightWindow.windowRightHealth)+"/1000";
        }
        
        // Updates the Health Bar
        private updateHealthBar():void
        {   
            if (this.player.playerHealth >= 75) // Display Green Bar indicating over 75% Health
            {
                this.healthbar.graphics.clear().beginFill("#06d600").drawRect(0,0,(this.player.playerHealth)*10,10);
            } else if (this.player.playerHealth >=45)   // Display Orange Bar indicating over 45% Health
            {
                this.healthbar.graphics.clear().beginFill("#ea7100").drawRect(0,0,(this.player.playerHealth)*10,10);
            } else if (this.player.playerHealth <=45)   // Display Red Bar indicating less than 45% Health
            {
                this.healthbar.graphics.clear().beginFill("#ea0000").drawRect(0,0,(this.player.playerHealth)*10,10);
            }
            this.addChild(this.healthbar);
        }

        // Updates left window health bar
        private updateHealthBarLeftWindow()
        {   
            if (this.leftWindow.windowLeftHealth >= 650) // Display Green Bar indicating over 75% Health
            {
                this.healthbarLeftWindow.graphics.clear().beginFill("#06d600").drawRect(this.leftWindow.x-22,this.leftWindow.y-55,(this.leftWindow.windowLeftHealth/200)*10,5);
            } 
            else if (this.leftWindow.windowLeftHealth >=450)   // Display Orange Bar indicating over 45% Health
            {
                this.healthbarLeftWindow.graphics.clear().beginFill("#ea7100").drawRect(this.leftWindow.x-22,this.leftWindow.y-55,(this.leftWindow.windowLeftHealth/200)*10,5);
            } 
            else if (this.leftWindow.windowLeftHealth <=450)   // Display Red Bar indicating less than 45% Health
            {
                this.healthbarLeftWindow.graphics.clear().beginFill("#ea0000").drawRect(this.leftWindow.x-22,this.leftWindow.y-55,(this.leftWindow.windowLeftHealth/200)*10,5);
            }
            this.addChild(this.healthbarLeftWindow);
        }

        // Updates left window health bar
        private updateHealthBarRightWindow()
        {   
            if (this.rightWindow.windowRightHealth >= 650) // Display Green Bar indicating over 75% Health
            {
                this.healthbarRightWindow.graphics.clear().beginFill("#06d600").drawRect(this.rightWindow.x-22,this.rightWindow.y-10,(this.rightWindow.windowRightHealth/200)*10,5);
            } 
            else if (this.rightWindow.windowRightHealth >=450)   // Display Orange Bar indicating over 45% Health
            {
                this.healthbarRightWindow.graphics.clear().beginFill("#ea7100").drawRect(this.rightWindow.x-22,this.rightWindow.y-10,(this.rightWindow.windowRightHealth/200)*10,5);
            } 
            else if (this.rightWindow.windowRightHealth <=450)   // Display Red Bar indicating less than 45% Health
            {
                this.healthbarRightWindow.graphics.clear().beginFill("#ea0000").drawRect(this.rightWindow.x-22,this.rightWindow.y-10,(this.rightWindow.windowRightHealth/200)*10,5);
            }
            this.addChild(this.healthbarRightWindow);
        }
    }
}