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
            _this.zombieCount = 10;
            _this.bulletNum = 10;
            _this.bulletCounter = 0;
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
            //Add Right Window
            this.rightWindow = new objects.WindowRight();
            this.addChild(this.rightWindow);
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
            //Add Labels
            this.playerHealth = new objects.Label("Health: " + this.player.playerHealth, "20px", "Verdana", "#000000", 20, 560, false);
            this.addChild(this.playerHealth);
            //Add Mouse Listener
            this.mouse = new managers.Mouse(this.player, this.gameCanvas);
            this.mouse.AddClickListener(function (event) {
                //Add Bullets
                _this.bulletFire();
            });
        };
        Play.prototype.Update = function () {
            var _this = this;
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
            this.zombie.forEach(function (zombies) {
                zombies.Update();
                //Checks collision with the player and each zombie         
                _this.collision.checkCollision(_this.player, zombies);
                //Check collision with wall+ zombie
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
            //Checks collisions between each zombie and each bullet
            this.zombie.forEach(function (zombie) {
                _this.bullet.forEach(function (bullet) {
                    _this.collision.checkCollision(zombie, bullet);
                });
            });
            //Update bullet
            this.bullet.forEach(function (bullet) {
                //Update Bullet
                bullet.Update();
            });
            //Update Labels           
            this.updateLabels();
            //Change Scene Condition
            if (this.player.isAlive == false) {
                this.currentScene = config.Scene.END;
                this.removeAllChildren();
            }
            return this.currentScene;
        };
        // PRIVATE METHODS
        Play.prototype.zombieSpawn = function () {
            var count;
            for (count = 0; count < this.zombieCount; count++) {
                this.zombie[count] = new objects.Zombie(this.player, this.leftWindow, this.rightWindow);
                this.addChild(this.zombie[count]);
            }
        };
        //Bullet
        Play.prototype.bulletSpawn = function () {
            for (var count = 0; count < this.bulletNum; count++) {
                this.bullet[count] = new objects.Bullet();
                this.addChild(this.bullet[count]);
            }
        };
        Play.prototype.bulletFire = function () {
            this.bullet[this.bulletCounter].x = this.player.bulletSpawn.x;
            this.bullet[this.bulletCounter].y = this.player.bulletSpawn.y;
            this.bullet[this.bulletCounter].gunFired = true;
            this.bullet[this.bulletCounter].bulletCollided = true;
            this.bullet[this.bulletCounter].bulletRotation = this.player.playerRotation;
            this.bulletCounter++;
            if (this.bulletCounter >= this.bulletNum - 1) {
                this.bulletCounter = 0;
            }
        };
        Play.prototype.updateLabels = function () {
            this.playerHealth.text = "Health: " + this.player.playerHealth;
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map