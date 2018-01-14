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
    var Level1 = /** @class */ (function (_super) {
        __extends(Level1, _super);
        // PUBLIC PROPETIES
        // CONSTRUCTORS
        function Level1(currentScene, gameCanvas) {
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
        Level1.prototype.Start = function () {
            var _this = this;
            //Add Background Music  
            this.backgroundMusic = createjs.Sound.play("backgroundMusic", 0, 0, 0, -1, 0.2, 0);
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
            this.level1_leftWindow = new objects.WindowLeft();
            this.addChild(this.level1_leftWindow);
            //Add Right Window
            this.level1_rightWindow = new objects.WindowRight();
            this.addChild(this.level1_rightWindow);
            //Add Player
            this.player = new objects.Player();
            this.addChild(this.player);
            this.player.currentScene = "level1";
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
            this.instructionLbel = new objects.Label("Kill 20 zombies to level up", "30px", "Boycott", "#FFFFFF", (config.Screen.WIDTH / 5) * 1.8, (config.Screen.HEIGHT / 4) * 3.2, false);
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
        Level1.prototype.Update = function () {
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
            this.collision.checkCollision(this.player, this.level1_leftWindow);
            this.collision.checkCollision(this.player, this.level1_rightWindow);
            // Update Zombie
            this.zombie.forEach(function (zombies) {
                zombies.Update();
                // Checks collision with the player and each zombie         
                _this.collision.checkCollision(_this.player, zombies);
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
                _this.collision.checkCollision(zombies, _this.level1_leftWindow);
                _this.collision.checkCollision(zombies, _this.level1_rightWindow);
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
            if (this.level1_leftWindow.buildWindow || this.level1_rightWindow.buildWindow) {
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
                this.currentScene = config.Scene.LEVEL2;
                this.removeAllChildren();
            }
            return this.currentScene;
        };
        // PRIVATE METHODS
        // Spawn Zombies onto the Scene
        Level1.prototype.zombieSpawn = function () {
            var count;
            for (count = 0; count < this.zombieCount; count++) {
                this.zombie[count] = new objects.Zombie(this.player, this.level1_leftWindow, this.level1_rightWindow, this.level2_windowLeft, this.level2_windowRight);
                this.addChild(this.zombie[count]);
            }
        };
        // Spawn Bullets onto the Scene
        Level1.prototype.bulletSpawn = function () {
            for (var count = 0; count <= this.bulletNum; count++) {
                this.bullet[count] = new objects.Bullet();
                this.addChild(this.bullet[count]);
            }
        };
        Level1.prototype.bulletFire = function () {
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
        Level1.prototype.reloadBullet = function () {
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
        Level1.prototype.resetBulletCounter = function () {
            this.bulletCounter = 0;
            //console.log ("bulletCounter has been reset to: "+this.bulletCounter)        // debugger - Checking to see if bulletCounter was reset
            // Re-Enable the Player to Shoot again
            this.allowBulletFire = true;
            //console.log ("allowBulletFire is re-Enabled");                              // debugger - checking to see if allowBulletFire was re-enabled
        };
        // Update Current Labels on Screen
        Level1.prototype.updateLabels = function () {
            this.bulletLabel.text = "Bullets: " + (this.bulletNum - this.bulletCounter) + "/20";
            this.killCountLabel.text = "Kills:  " + this.collision.killCount;
        };
        // Updates the Health Bar
        Level1.prototype.updateHealthBar = function () {
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
        Level1.prototype.updateHealthBarLeftWindow = function () {
            if (this.level1_leftWindow.windowLeftHealth >= 650) {
                this.healthbarLeftWindow.graphics.clear().beginFill("#06d600").drawRect(this.level1_leftWindow.x - 22, this.level1_leftWindow.y - 55, (this.level1_leftWindow.windowLeftHealth / 200) * 10, 5);
            }
            else if (this.level1_leftWindow.windowLeftHealth >= 450) {
                this.healthbarLeftWindow.graphics.clear().beginFill("#ea7100").drawRect(this.level1_leftWindow.x - 22, this.level1_leftWindow.y - 55, (this.level1_leftWindow.windowLeftHealth / 200) * 10, 5);
            }
            else if (this.level1_leftWindow.windowLeftHealth <= 450) {
                this.healthbarLeftWindow.graphics.clear().beginFill("#ea0000").drawRect(this.level1_leftWindow.x - 22, this.level1_leftWindow.y - 55, (this.level1_leftWindow.windowLeftHealth / 200) * 10, 5);
            }
            this.addChild(this.healthbarLeftWindow);
        };
        // Updates left window health bar
        Level1.prototype.updateHealthBarRightWindow = function () {
            if (this.level1_rightWindow.windowRightHealth >= 650) {
                this.healthbarRightWindow.graphics.clear().beginFill("#06d600").drawRect(this.level1_rightWindow.x - 22, this.level1_rightWindow.y - 10, (this.level1_rightWindow.windowRightHealth / 200) * 10, 5);
            }
            else if (this.level1_rightWindow.windowRightHealth >= 450) {
                this.healthbarRightWindow.graphics.clear().beginFill("#ea7100").drawRect(this.level1_rightWindow.x - 22, this.level1_rightWindow.y - 10, (this.level1_rightWindow.windowRightHealth / 200) * 10, 5);
            }
            else if (this.level1_rightWindow.windowRightHealth <= 450) {
                this.healthbarRightWindow.graphics.clear().beginFill("#ea0000").drawRect(this.level1_rightWindow.x - 22, this.level1_rightWindow.y - 10, (this.level1_rightWindow.windowRightHealth / 200) * 10, 5);
            }
            this.addChild(this.healthbarRightWindow);
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map