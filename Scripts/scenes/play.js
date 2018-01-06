var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPETIES
        // CONSTRUCTORS
        function Play(currentScene, gameCanvas) {
            var _this = _super.call(this) || this;
            // Zombie Counter
            _this.zombieCount = 20;
            // Bullet Variables
            _this.bulletNum = 20;
            _this.bulletCounter = 0;
            _this.allowBulletFire = true;
            _this.fixWindowTextDisplay = false;
            _this.enableFixWindow = 0; // 0 for no window, 1 for left, 2 for right
            _this.currentScene = currentScene;
            _this.mouseEnabled = true;
            _this.gameCanvas = gameCanvas;
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            var _this = this;
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
            this.leftWindowHealth = new objects.Label("" + this.leftWindow.windowLeftHealth + "/100", "10px", "Verdana", "#FFFFFF", this.leftWindow.x - 18, this.leftWindow.y - 5, false);
            this.addChild(this.leftWindowHealth);
            //Add Right Window
            this.rightWindow = new objects.WindowRight();
            this.addChild(this.rightWindow);
            // Set Right Window's Health Label
            this.rightWindowHealth = new objects.Label("" + this.rightWindow.windowRightHealth + "/100", "10px", "Verdana", "#FFFFFF", this.rightWindow.x - 18, this.rightWindow.y - 5, false);
            this.addChild(this.rightWindowHealth);
            //Add Player
            this.player = new objects.Player();
            this.addChild(this.player);
            // Add Zombies
            this.zombie = new Array();
            this.zombieSpawn();
            // Add Bullets
            this.bullet = new Array();
            this.bulletSpawn();
            //Add Collision
            this.collision = new managers.Collision();
            // Keyboard Input
            this.keyboardInput = new managers.keyBoardInput();
            // Player's Health Label
            //this.playerHealth = new objects.Label("Health: " +this.player.playerHealth, "20px","Verdana", "#000000", 20, 640, false);    
            //this.playerHealthOutline = new objects.Label("Health: " +this.player.playerHealth, "20px","Verdana", "#FFFFFF", 20, 640, false);
            // Bullet Label
            this.bulletLabel = new objects.Label("Bullets: " + (this.bulletNum - this.bulletCounter), "20px", "Verdana", "#000000", 20, 660, false);
            this.bulletLabelOutline = new objects.Label("Bullets: " + (this.bulletNum - this.bulletCounter), "20px", "Verdana", "#FFFFFF", 20, 660, false);
            // Reload Labels
            this.reloadBulletLabel = new objects.Label("Press CTRL to Reload", "20px", "Verdana", "#000000", (config.Screen.WIDTH / 5) * 2.2, (config.Screen.HEIGHT / 4) * 3, false);
            this.reloadBulletLabelOutline = new objects.Label("Press CTRL to Reload", "20px", "Verdana", "#FFFFFF", (config.Screen.WIDTH / 5) * 2.2, (config.Screen.HEIGHT / 4) * 3, false);
            // Fixing Window Labels
            this.fixWindowLabel = new objects.Label("Press NUM PAD ZERO to Fix Windows", "20px", "Verdana", "#000000", (config.Screen.WIDTH / 5) * 1.8, (config.Screen.HEIGHT / 4) * 3, false);
            this.fixWindowLabelOutline = new objects.Label("Press NUM PAD ZERO to Fix Windows", "20px", "Verdana", "#FFFFFF", (config.Screen.WIDTH / 5) * 1.8, (config.Screen.HEIGHT / 4) * 3, false);
            // Set Label outlines to True
            //this.playerHealthOutline.outline = 1;
            this.bulletLabelOutline.outline = 1;
            this.fixWindowLabelOutline.outline = 1;
            this.reloadBulletLabelOutline.outline = 1;
            // Add Labels onto Scene
            this.addChild(this.bulletLabel);
            this.addChild(this.bulletLabelOutline);
            //Add Mouse Listener
            this.mouse = new managers.Mouse(this.player, this.gameCanvas);
            this.mouse.AddClickListener(function (event) {
                // Bullet is Fired, Activate Method BulletFire()
                _this.bulletFire();
            });
            // Health Bar Related Initiations
            this.healthbar = new createjs.Shape();
            this.maxHealthbar = new createjs.Shape();
            this.healthbarOutline = new createjs.Shape();
            this.healthbarOutline.graphics.clear().beginFill("#FFFFFF").drawRect(19, 639, 101.5 * 1.5, 22);
            this.maxHealthbar.graphics.clear().beginFill("#000000").drawRect(20, 640, 100 * 1.5, 20);
            // Adding Health Bar into Scene
            this.addChild(this.healthbarOutline);
            this.addChild(this.healthbar);
            this.addChild(this.maxHealthbar);
        };
        Play.prototype.Update = function () {
            var _this = this;
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
            // Update Zombie
            this.zombie.forEach(function (zombies) {
                zombies.Update();
                // Checks collision with the player and each zombie         
                _this.collision.checkCollision(_this.player, zombies);
                // Checks collision with other zombies
                _this.collision.collisionPushBack(zombies, zombies);
                // Check collision with wall+ zombie
                _this.collision.checkCollisionWall(zombies, _this.leftWallTop);
                _this.collision.checkCollisionWall(zombies, _this.leftWallBottom);
                _this.collision.checkCollisionWall(zombies, _this.topWall);
                _this.collision.checkCollisionWall(zombies, _this.bottomWall);
                _this.collision.checkCollisionWall(zombies, _this.rightWallBath);
                _this.collision.checkCollisionWall(zombies, _this.mainGateWallLeft);
                _this.collision.checkCollisionWall(zombies, _this.mainGateWallRight);
                _this.collision.checkCollisionWall(zombies, _this.rightWall);
                _this.collision.checkCollisionWall(zombies, _this.insideHorizontalWall);
                _this.collision.checkCollisionWall(zombies, _this.insideVerticalWall);
                _this.collision.checkCollision(zombies, _this.leftWindow);
                _this.collision.checkCollision(zombies, _this.rightWindow);
            });
            // Checks collisions between each zombie and each bullet
            this.zombie.forEach(function (zombie) {
                _this.bullet.forEach(function (bullet) {
                    _this.collision.checkCollision(zombie, bullet);
                });
            });
            // Update bullet
            this.bullet.forEach(function (bullet) {
                //Update Bullet
                bullet.Update();
            });
            // Update Labels           
            this.updateLabels();
            // Change Scene Condition
            if (this.player.isAlive == false) {
                this.currentScene = config.Scene.END;
                this.removeAllChildren();
            }
            if (!this.allowBulletFire) {
                // Reload Prompt for the User
                this.addChild(this.reloadBulletLabel);
                this.addChild(this.reloadBulletLabelOutline);
                console.log("added reload text"); // Debugger
                // Reload Method
                this.reloadBullet();
            }
            if (this.leftWindow.isBroken) {
                this.removeChild(this.leftWindowHealth);
                this.removeChild(this.leftWindowHealthOutline);
            }
            if (this.rightWindow.isBroken) {
                this.removeChild(this.rightWindowHealth);
                this.removeChild(this.rightWindowHealthOutline);
            }
            this.updateHealthBar();
            this.fixWindow();
            this.updateFix();
            return this.currentScene;
        };
        // PRIVATE METHODS
        // Spawn Zombies onto the Scene
        Play.prototype.zombieSpawn = function () {
            var count;
            for (count = 0; count < this.zombieCount; count++) {
                this.zombie[count] = new objects.Zombie(this.player, this.leftWindow, this.rightWindow);
                this.addChild(this.zombie[count]);
            }
        };
        // Spawn Bullets onto the Scene
        Play.prototype.bulletSpawn = function () {
            for (var count = 0; count <= this.bulletNum; count++) {
                this.bullet[count] = new objects.Bullet();
                this.addChild(this.bullet[count]);
            }
        };
        Play.prototype.bulletFire = function () {
            if (this.allowBulletFire) {
                // Sets Bullet Spawn to Player's Location
                this.bullet[this.bulletCounter].x = this.player.bulletSpawn.x;
                this.bullet[this.bulletCounter].y = this.player.bulletSpawn.y;
                this.bullet[this.bulletCounter].gunFired = true;
                this.bullet[this.bulletCounter].bulletCollided = true;
                this.bullet[this.bulletCounter].bulletRotation = this.player.playerRotation;
                this.bulletCounter++;
            }
            // Resets Bullet Counter
            if (this.bulletCounter >= this.bulletNum) {
                //console.log ("allBulletFire set to False;");                          // Debugger
                this.allowBulletFire = false; // Stops Player from continued shooting after 0 bullets
                this.bulletCounter = this.bulletNum; // Reset bullet to the max amount to stop counter from going over array index
                //console.log ("bulletCounter set to: "+this.bulletCounter);            // Debugger
            }
        };
        Play.prototype.reloadBullet = function () {
            var getKey = this.keyboardInput.getkeyInput(); // Get Keyboard Input from Player
            //console.log("Display Key: "+getKey);                  // Debugger
            if (getKey != null && getKey == config.Key.CTRL) {
                //console.log ("Reloading Bullets");                // Debugger
                this.resetBulletCounter();
                // Remove Reload Prompt
                this.removeChild(this.reloadBulletLabel);
                this.removeChild(this.reloadBulletLabelOutline);
            }
        };
        // Resets the Bullet Counter to Zero
        Play.prototype.resetBulletCounter = function () {
            this.bulletCounter = 0;
            //console.log ("bulletCounter has been reset to: "+this.bulletCounter)        // debugger - Checking to see if bulletCounter was reset
            // Re-Enable the Player to Shoot again
            this.allowBulletFire = true;
            //console.log ("allowBulletFire is re-Enabled");                              // debugger - checking to see if allowBulletFire was re-enabled
        };
        Play.prototype.updateLabels = function () {
            //this.playerHealth.text = "Health: "+ this.player.playerHealth;
            //this.playerHealthOutline.text = "Health: "+ this.player.playerHealth;
            this.bulletLabel.text = "Bullets: " + (this.bulletNum - this.bulletCounter) + "/20";
            this.bulletLabelOutline.text = "Bullets: " + (this.bulletNum - this.bulletCounter) + "/20";
            this.leftWindowHealth.text = "" + (this.leftWindow.windowLeftHealth) + "/100";
            this.rightWindowHealth.text = "" + (this.rightWindow.windowRightHealth) + "/100";
        };
        // Updates the Health Bar
        Play.prototype.updateHealthBar = function () {
            if (this.player.playerHealth >= 75) {
                this.healthbar.graphics.clear().beginFill("DarkGreen").drawRect(20, 640, (this.player.playerHealth / 10) * 15, 20);
            }
            else if (this.player.playerHealth >= 45) {
                this.healthbar.graphics.clear().beginFill("DarkOrange").drawRect(20, 640, (this.player.playerHealth / 10) * 15, 20);
            }
            else if (this.player.playerHealth <= 45) {
                this.healthbar.graphics.clear().beginFill("DarkRed").drawRect(20, 640, (this.player.playerHealth / 10) * 15, 20);
            }
            this.addChild(this.healthbar);
        };
        // Methods to Fix Window
        Play.prototype.fixWindow = function () {
            // Checking to see if the player is colliding with the window from the inside
            if ((this.player.y <= this.leftWindow.y + this.leftWindow.height
                && this.player.y >= this.leftWindow.y
                && this.player.x >= (this.leftWindow.x - this.player.halfWidth + 30)
                && this.player.x <= this.leftWindow.x - this.leftWindow.halfWidth + 50)) {
                // Allow the Player to fix the window
                this.enableFixWindow = 1;
                // Display User Prompt for Player to Fix Window
                if (!this.fixWindowTextDisplay && this.leftWindow.isBroken) {
                    this.addChild(this.fixWindowLabel);
                    this.addChild(this.fixWindowLabelOutline);
                }
                else if (this.leftWindow.windowLeftHealth == 100 && this.fixWindowTextDisplay) {
                    this.removeChild(this.fixWindowLabel);
                    this.removeChild(this.fixWindowLabelOutline);
                    this.fixWindowTextDisplay = false;
                }
                // Text is now being Displayed
                this.fixWindowTextDisplay = true;
                //console.log ("Set to Left Window: "+ this.enableFixWindow); // Debugger
            }
            else if (this.player.x >= this.rightWindow.x
                && this.player.x <= this.rightWindow.x + this.rightWindow.width
                && this.player.y >= this.rightWindow.y + this.rightWindow.height - 50
                && this.player.y <= this.rightWindow.y + this.rightWindow.height + this.player.halfWidth - 50) {
                // Allows the Player to fix the window
                this.enableFixWindow = 2;
                // Display User Prompt for Player to Fix Window
                if (!this.fixWindowTextDisplay && this.rightWindow.isBroken) {
                    this.addChild(this.fixWindowLabel);
                    this.addChild(this.fixWindowLabelOutline);
                }
                else if (this.rightWindow.windowRightHealth == 100 && this.fixWindowTextDisplay) {
                    this.removeChild(this.fixWindowLabel);
                    this.removeChild(this.fixWindowLabelOutline);
                    this.fixWindowTextDisplay = false;
                }
                // Text is now being displayed
                this.fixWindowTextDisplay = true;
                //console.log ("Set to Right Window: "+ this.enableFixWindow);      // Debugger
            }
            else {
                // Disable Window Fix
                this.enableFixWindow = 0;
                // Remove Label is the Window is fixed
                if (this.fixWindowTextDisplay && !this.leftWindow.isBroken) {
                    this.removeChild(this.fixWindowLabel);
                    this.removeChild(this.fixWindowLabelOutline);
                }
                this.fixWindowTextDisplay = false;
                //console.log ("Set to None Window: "+ this.enableFixWindow);       // Debugger
            }
        };
        Play.prototype.updateFix = function () {
            var getKey = this.keyboardInput.getkeyInput(); // Get Keyboard Input from Player
            console.log("Key: " + getKey);
            // Check to see if the window is broken/if the player is nearby window
            if ((this.enableFixWindow == 1) && (getKey != null && getKey == config.Key.NUM_PAD_0)) {
                if (this.leftWindow.windowLeftHealth <= 0) {
                    this.addChild(this.leftWindow); // Re-add the window back into Scene
                }
                if (this.leftWindow.windowLeftHealth == 100) {
                    this.enableFixWindow = 0;
                }
                else {
                    this.leftWindow.windowLeftHealth += 5; // Increase left window health by 5
                    this.leftWindow.isBroken = false; // Left Window is no longer Broken
                    this.addChild(this.leftWindowHealth);
                    this.addChild(this.leftWindowHealthOutline);
                }
                //console.log("State of Left Window: isBroken: "+this.leftWindow.isBroken);       // Debugger
                // Check to see if the window being fixed is the right window and if num pad zero is pressed
            }
            else if ((this.enableFixWindow == 2) && (getKey != null && getKey == config.Key.NUM_PAD_0)) {
                if (this.rightWindow.windowRightHealth <= 0) {
                    this.addChild(this.rightWindow); // Re-add the window back into Scene
                }
                // Checks to see if the window is at full health, thus disabling window fix
                if (this.rightWindow.windowRightHealth == 100) {
                    this.enableFixWindow = 0;
                }
                else {
                    this.rightWindow.windowRightHealth += 5; // Increase right window health by 5
                    this.rightWindow.isBroken = false; // Right Window is no longer Broken
                    this.addChild(this.rightWindowHealth);
                    this.addChild(this.rightWindowHealthOutline);
                }
                //console.log("State of Right Window: isBroken: "+this.leftWindow.isBroken);      // Debugger
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map