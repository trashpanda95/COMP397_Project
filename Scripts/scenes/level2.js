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
    var Level2 = /** @class */ (function (_super) {
        __extends(Level2, _super);
        // CONSTRUCTORS
        function Level2(currentScene, gameCanvas) {
            var _this = _super.call(this) || this;
            // Zombie Counter
            _this.zombieCount = 10;
            // Bullet Variables
            _this.bulletNum = 20;
            _this.bulletCounter = 0;
            _this.allowBulletFire = true;
            _this.currentScene = currentScene;
            _this.mouseEnabled = true;
            _this.gameCanvas = gameCanvas;
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Level2.prototype.Start = function () {
            var _this = this;
            //Add Background Music   
            this.backgroundMusic = createjs.Sound.play("backgroundMusic", 0, 0, 0, -1, 0.2, 0);
            //Add Background Map
            this.bgMap = new objects.Bgmap("level2BG");
            this.addChild(this.bgMap);
            //Add Left Wall Top
            this.level2_leftWallTop = new objects.WallLeftTop();
            this.addChild(this.level2_leftWallTop);
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
            this.zombie = new Array();
            this.zombieSpawn();
            // Add Bullets
            this.bullet = new Array();
            this.bulletSpawn();
            //Add Collision
            this.collision = new managers.Collision();
            // Keyboard Input
            this.keyboardInput = new managers.keyBoardInput();
            // Bullet Label
            this.killCountLabel = new objects.Label("Kills: " + this.collision.killCount, "20px", "Boycott", "#ffffff", 850, 25, false);
            this.bulletLabel = new objects.Label("Bullets: " + (this.bulletNum - this.bulletCounter), "20px", "Boycott", "#ffffff", 20, 25, false);
            // Reload Labels
            this.reloadBulletLabel = new objects.Label("Press CTRL to Reload", "30px", "Boycott", "#FFFFFF", (config.Screen.WIDTH / 5) * 1.9, (config.Screen.HEIGHT / 4) * 3.2, false);
            // Instruction Labels
            this.instructionLbel = new objects.Label("Kill 20 zombies to finish the game", "30px", "Boycott", "#FFFFFF", (config.Screen.WIDTH / 5) * 1.3, (config.Screen.HEIGHT / 4) * 3.2, false);
            // Fixing Window Labels
            this.buildLabel = new objects.Label("Press R or 0 to Fix Window", "30px", "Boycott", "#FFFFFF", (config.Screen.WIDTH / 5) * 1.7, (config.Screen.HEIGHT / 4) * 3, false);
            // Add Labels onto Scene
            this.addChild(this.bulletLabel);
            this.addChild(this.killCountLabel);
            this.addChild(this.instructionLbel);
            //Add Mouse Listener
            this.mouse = new managers.Mouse(this.player, this.gameCanvas);
            this.mouse.AddClickListener(function (event) {
                // Bullet is Fired, Activate Method BulletFire()
                _this.bulletFire();
            });
            // Health Bar Related Initiations
            this.healthbar = new createjs.Shape();
            this.addChild(this.healthbar);
            this.healthbarLeftWindow = new createjs.Shape();
            this.addChild(this.healthbarLeftWindow);
            this.healthbarRightWindow = new createjs.Shape();
            this.addChild(this.healthbarRightWindow);
        };
        Level2.prototype.Update = function () {
            var _this = this;
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
            this.zombie.forEach(function (zombies) {
                zombies.Update();
                // Checks collision with the player and each zombie         
                _this.collision.checkCollision(_this.player, zombies);
                // Check collision with wall+ zombie
                _this.collision.checkCollisionWall(zombies, _this.level2_leftWallTop);
                _this.collision.checkCollisionWall(zombies, _this.level2_leftWallBottom);
                _this.collision.checkCollisionWall(zombies, _this.level2_bottomWallLeft);
                _this.collision.checkCollisionWall(zombies, _this.level2_rightWall);
                _this.collision.checkCollision(zombies, _this.level2_windowLeft);
                _this.collision.checkCollision(zombies, _this.level2_windowRight);
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
            //Remove instruction label
            setTimeout(function () {
                _this.removeChild(_this.instructionLbel);
            }, 5000);
            // Change Scene Condition
            if (this.player.isAlive == false) {
                this.backgroundMusic.stop();
                this.currentScene = config.Scene.END;
                this.removeAllChildren();
            }
            if (!this.allowBulletFire) {
                // Reload Prompt for the User
                this.addChild(this.reloadBulletLabel);
                // Reload Method
                this.reloadBullet();
            }
            if (this.level2_windowLeft.buildWindow || this.level2_windowRight.buildWindow) {
                this.addChild(this.buildLabel);
            }
            else {
                this.removeChild(this.buildLabel);
            }
            this.updateHealthBar();
            this.updateLabels();
            this.updateHealthBarLeftWindow();
            this.updateHealthBarRightWindow();
            if (this.collision.killCount == 20) {
                this.backgroundMusic.stop();
                this.currentScene = config.Scene.END;
                this.removeAllChildren();
            }
            return this.currentScene;
        };
        // PRIVATE METHODS
        // Spawn Zombies onto the Scene
        Level2.prototype.zombieSpawn = function () {
            var count;
            for (count = 0; count < this.zombieCount; count++) {
                this.zombie[count] = new objects.Zombie(this.player, this.level1_leftWindow, this.level1_rightWindow, this.level2_windowLeft, this.level2_windowRight);
                this.addChild(this.zombie[count]);
            }
        };
        // Spawn Bullets onto the Scene
        Level2.prototype.bulletSpawn = function () {
            for (var count = 0; count <= this.bulletNum; count++) {
                this.bullet[count] = new objects.Bullet();
                this.addChild(this.bullet[count]);
            }
        };
        Level2.prototype.bulletFire = function () {
            if (this.allowBulletFire) {
                createjs.Sound.play("gunFire", 0, -0.5, 0, 0, .5, 0);
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
            if (this.bulletCounter >= this.bulletNum) {
                //console.log ("allBulletFire set to False;");                          // Debugger
                this.allowBulletFire = false; // Stops Player from continued shooting after 0 bullets
                this.bulletCounter = this.bulletNum; // Reset bullet to the max amount to stop counter from going over array index
                //console.log ("bulletCounter set to: "+this.bulletCounter);            // Debugger
            }
        };
        Level2.prototype.reloadBullet = function () {
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
        Level2.prototype.resetBulletCounter = function () {
            this.bulletCounter = 0;
            //console.log ("bulletCounter has been reset to: "+this.bulletCounter)        // debugger - Checking to see if bulletCounter was reset
            // Re-Enable the Player to Shoot again
            this.allowBulletFire = true;
            //console.log ("allowBulletFire is re-Enabled");                              // debugger - checking to see if allowBulletFire was re-enabled
        };
        // Update Current Labels on Screen
        Level2.prototype.updateLabels = function () {
            this.bulletLabel.text = "Bullets: " + (this.bulletNum - this.bulletCounter) + "/20";
            this.killCountLabel.text = "Kills:  " + this.collision.killCount;
        };
        // Updates the Health Bar
        Level2.prototype.updateHealthBar = function () {
            if (this.player.playerHealth >= 75) {
                this.healthbar.graphics.clear().beginFill("#06d600").drawRect(0, 0, (this.player.playerHealth) * 10, 10);
            }
            else if (this.player.playerHealth >= 45) {
                this.healthbar.graphics.clear().beginFill("#ea7100").drawRect(0, 0, (this.player.playerHealth) * 10, 10);
            }
            else if (this.player.playerHealth <= 45) {
                this.healthbar.graphics.clear().beginFill("#ea0000").drawRect(0, 0, (this.player.playerHealth) * 10, 10);
            }
            this.addChild(this.healthbar);
        };
        // Updates left window health bar
        Level2.prototype.updateHealthBarLeftWindow = function () {
            if (this.level2_windowLeft.windowLeftHealth >= 650) {
                this.healthbarLeftWindow.graphics.clear().beginFill("#06d600").drawRect(this.level2_windowLeft.x - 22, this.level2_windowLeft.y - 55, (this.level2_windowLeft.windowLeftHealth / 200) * 10, 5);
            }
            else if (this.level2_windowLeft.windowLeftHealth >= 450) {
                this.healthbarLeftWindow.graphics.clear().beginFill("#ea7100").drawRect(this.level2_windowLeft.x - 22, this.level2_windowLeft.y - 55, (this.level2_windowLeft.windowLeftHealth / 200) * 10, 5);
            }
            else if (this.level2_windowLeft.windowLeftHealth <= 450) {
                this.healthbarLeftWindow.graphics.clear().beginFill("#ea0000").drawRect(this.level2_windowLeft.x - 22, this.level2_windowLeft.y - 55, (this.level2_windowLeft.windowLeftHealth / 200) * 10, 5);
            }
            this.addChild(this.healthbarLeftWindow);
        };
        // Updates left window health bar
        Level2.prototype.updateHealthBarRightWindow = function () {
            if (this.level2_windowRight.windowRightHealth >= 650) {
                this.healthbarRightWindow.graphics.clear().beginFill("#06d600").drawRect(this.level2_windowRight.x - 22, this.level2_windowRight.y - 10, (this.level2_windowRight.windowRightHealth / 200) * 10, 5);
            }
            else if (this.level2_windowRight.windowRightHealth >= 450) {
                this.healthbarRightWindow.graphics.clear().beginFill("#ea7100").drawRect(this.level2_windowRight.x - 22, this.level2_windowRight.y - 10, (this.level2_windowRight.windowRightHealth / 200) * 10, 5);
            }
            else if (this.level2_windowRight.windowRightHealth <= 450) {
                this.healthbarRightWindow.graphics.clear().beginFill("#ea0000").drawRect(this.level2_windowRight.x - 22, this.level2_windowRight.y - 10, (this.level2_windowRight.windowRightHealth / 200) * 10, 5);
            }
            this.addChild(this.healthbarRightWindow);
        };
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map