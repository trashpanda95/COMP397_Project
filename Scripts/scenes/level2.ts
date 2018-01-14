module scenes {
    export class Level2 extends objects.Scene
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
        private buildLabelOutline:objects.Label;
        private killCountLabel:objects.Label;
        private instructionLbel:objects.Label;

        private healthbar:createjs.Shape;
        private healthbarLeftWindow:createjs.Shape;
        private healthbarRightWindow:createjs.Shape;
        
        // Audio Engine
        private backgroundMusic: createjs.AbstractSoundInstance;

        //Walls
        private level2_leftWallTop: objects.WallLeftTop;
        private level2_leftWallBottom: objects.WallLeftBottom;
        private level2_bottomWallLeft: objects.WallBottomLeft;
        private level2_rightWall: objects.WallRight;

        //Window
        private level2_windowLeft: objects.WindowLeft_Level2;
        private level2_windowRight: objects.WindowRight_Level2;
        private level1_leftWindow: objects.WindowLeft;
        private level1_rightWindow: objects.WindowRight;


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
            //Add Background Music   
            this.backgroundMusic = createjs.Sound.play("backgroundMusic",0,0,0,-1,0.2,0);
            
            //Add Background Map
            this.bgMap = new objects.Bgmap("level2BG");
            this.addChild(this.bgMap);

            //Add Left Wall Top
            this.level2_leftWallTop = new objects.WallLeftTop();
            this.addChild(this.level2_leftWallTop );

            //Add Left Wall Bottom
            this.level2_leftWallBottom = new objects.WallLeftBottom();
            this.addChild(this.level2_leftWallBottom);

            //Add Top Wall
            this.level2_bottomWallLeft = new objects.WallBottomLeft();
            this.addChild(this.level2_bottomWallLeft);

            //Add Right Wall
            this.level2_rightWall = new objects.WallRight();
            this.addChild(this.level2_rightWall);

            //Add Left Window
            this.level2_windowLeft = new objects.WindowLeft_Level2();
            this.addChild(this.level2_windowLeft);
             
            //Add Left Window
            this.level2_windowRight = new objects.WindowRight_Level2();
            this.addChild(this.level2_windowRight);
             
            //Add Player
            this.player = new objects.Player();
            this.addChild(this.player); 

            this.player.currentScene = "level2";
                   
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
            
            // Bullet Label
            this.killCountLabel = new objects.Label("Kills: " +this.collision.killCount, "20px","Boycott", "#ffffff", 850, 25, false); 

            this.bulletLabel = new objects.Label("Bullets: " +(this.bulletNum - this.bulletCounter), "20px","Boycott", "#ffffff", 20, 25, false); 
            // Reload Labels
            this.reloadBulletLabel = new objects.Label("Press CTRL to Reload", "30px","Boycott", "#FFFFFF", (config.Screen.WIDTH/5)*1.9, (config.Screen.HEIGHT/4)*3.2, false);

            // Instruction Labels
            this.instructionLbel = new objects.Label("Kill 20 zombies to finish the game", "30px","Boycott", "#FFFFFF", (config.Screen.WIDTH/5)*1.3, (config.Screen.HEIGHT/4)*3.2, false);
            
            // Fixing Window Labels
            this.buildLabel= new objects.Label("Press R or 0 to Fix Window", "30px","Boycott", "#FFFFFF", (config.Screen.WIDTH/5)*1.7, (config.Screen.HEIGHT/4)*3, false);

            // Add Labels onto Scene
            this.addChild(this.bulletLabel);
            this.addChild(this.killCountLabel);
            this.addChild(this.instructionLbel);

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
            this.collision.checkCollisionWall(this.player, this.level2_leftWallTop);
            this.collision.checkCollisionWall(this.player, this.level2_leftWallBottom);
            this.collision.checkCollisionWall(this.player, this.level2_bottomWallLeft);
            this.collision.checkCollisionWall(this.player, this.level2_rightWall);
            this.collision.checkCollision(this.player, this.level2_windowLeft);
            this.collision.checkCollision(this.player, this.level2_windowRight);
            
            // Update Zombie
            this.zombie.forEach(zombies =>
            {
                zombies.Update();    
                // Checks collision with the player and each zombie         
                this.collision.checkCollision(this.player, zombies);   
                // Check collision with wall+ zombie
                this.collision.checkCollisionWall(zombies, this.level2_leftWallTop);
                this.collision.checkCollisionWall(zombies, this.level2_leftWallBottom);
                this.collision.checkCollisionWall(zombies, this.level2_bottomWallLeft);
                this.collision.checkCollisionWall(zombies, this.level2_rightWall);   
                this.collision.checkCollision(zombies, this.level2_windowLeft);   
                this.collision.checkCollision(zombies, this.level2_windowRight);
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
                    
            //Remove instruction label
            setTimeout(() => {
                this.removeChild(this.instructionLbel);
            }, 5000);
            
            // Change Scene Condition
            if (this.player.isAlive == false)
            {
                this.backgroundMusic.stop();
                this.currentScene = config.Scene.END;
                this.removeAllChildren();
            }  

            if (!this.allowBulletFire){

                // Reload Prompt for the User
                this.addChild(this.reloadBulletLabel);

                // Reload Method
                this.reloadBullet();
            }

            if (this.level2_windowLeft.buildWindow || this.level2_windowRight.buildWindow)
            {
                this.addChild(this.buildLabel);
            }
            else
            {
                this.removeChild(this.buildLabel);
            }
            this.updateHealthBar();
            this.updateLabels();
            this.updateHealthBarLeftWindow();
            this.updateHealthBarRightWindow();

            if(this.collision.killCount == 20)
            {
                this.backgroundMusic.stop();
                this.currentScene = config.Scene.END;
                this.removeAllChildren();
            }

            return this.currentScene;
        }

        // PRIVATE METHODS

        // Spawn Zombies onto the Scene
        private zombieSpawn()
        {  
            let count;
            for (count= 0; count < this.zombieCount; count++)
            {
                this.zombie[count] = new objects.Zombie(this.player, this.level1_leftWindow, this.level1_rightWindow,this.level2_windowLeft, this.level2_windowRight);      
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
                createjs.Sound.play("gunFire",0,-0.5, 0, 0, .5, 0);
                //createjs.Sound.play("gun_Fire", 0, 0, 0, 0, 0.25, 0);
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
            this.bulletLabel.text = "Bullets: "+ (this.bulletNum - this.bulletCounter)+"/20";
            this.killCountLabel.text = "Kills:  "+ this.collision.killCount;
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
            if (this.level2_windowLeft.windowLeftHealth >= 650) // Display Green Bar indicating over 75% Health
            {
                this.healthbarLeftWindow.graphics.clear().beginFill("#06d600").drawRect(this.level2_windowLeft.x-22,this.level2_windowLeft.y-55,(this.level2_windowLeft.windowLeftHealth/200)*10,5);
            } 
            else if (this.level2_windowLeft.windowLeftHealth >=450)   // Display Orange Bar indicating over 45% Health
            {
                this.healthbarLeftWindow.graphics.clear().beginFill("#ea7100").drawRect(this.level2_windowLeft.x-22,this.level2_windowLeft.y-55,(this.level2_windowLeft.windowLeftHealth/200)*10,5);
            } 
            else if (this.level2_windowLeft.windowLeftHealth <=450)   // Display Red Bar indicating less than 45% Health
            {
                this.healthbarLeftWindow.graphics.clear().beginFill("#ea0000").drawRect(this.level2_windowLeft.x-22,this.level2_windowLeft.y-55,(this.level2_windowLeft.windowLeftHealth/200)*10,5);
            }
            this.addChild(this.healthbarLeftWindow);
        }

        // Updates left window health bar
        private updateHealthBarRightWindow()
        {   
            if (this.level2_windowRight.windowRightHealth >= 650) // Display Green Bar indicating over 75% Health
            {
                this.healthbarRightWindow.graphics.clear().beginFill("#06d600").drawRect(this.level2_windowRight.x-22,this.level2_windowRight.y-10,(this.level2_windowRight.windowRightHealth/200)*10,5);
            } 
            else if (this.level2_windowRight.windowRightHealth >=450)   // Display Orange Bar indicating over 45% Health
            {
                this.healthbarRightWindow.graphics.clear().beginFill("#ea7100").drawRect(this.level2_windowRight.x-22,this.level2_windowRight.y-10,(this.level2_windowRight.windowRightHealth/200)*10,5);
            } 
            else if (this.level2_windowRight.windowRightHealth <=450)   // Display Red Bar indicating less than 45% Health
            {
                this.healthbarRightWindow.graphics.clear().beginFill("#ea0000").drawRect(this.level2_windowRight.x-22,this.level2_windowRight.y-10,(this.level2_windowRight.windowRightHealth/200)*10,5);
            }
            this.addChild(this.healthbarRightWindow);
        } 
 

    }
}