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
        function Play(assetManager, currentScene, gameCanvas) {
            var _this = _super.call(this) || this;
            _this.zombieCount = 5;
            _this.bulletNum = 10;
            _this.bulletCounter = 0;
            _this.timeTillSpawn = 60000;
            _this.lastSpawn = -1;
            _this.time = Date.now();
            _this.assetManager = assetManager;
            _this.currentScene = currentScene;
            _this.mouseEnabled = true;
            _this.gameCanvas = gameCanvas;
            _this.Start();
            return _this;
        }
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            var _this = this;
            //Add Player
            this.player = new objects.Player(this.assetManager);
            this.addChild(this.player);
            // Add Zombies
            this.zombie = new Array();
            this.zombieSpawn();
            this.lastSpawn = this.time;
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
            this.time = Date.now();
            //Update Zombie
            /* if (this.time > (this.lastSpawn+ this.timeTillSpawn))
            {
                console.log(this.time)
                this.lastSpawn = this.time;
            } */
            this.zombie.forEach(function (zombies) {
                zombies.Update();
                //Checks collision with the player and each zombie         
                _this.collision.checkCollision(_this.player, zombies);
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
            var drawLine = new createjs.Shape();
            var count;
            for (count = 0; count < this.zombieCount; count++) {
                this.zombie[count] = new objects.Zombie(this.assetManager, this.player);
                this.addChild(this.zombie[count], drawLine);
            }
        };
        //Bullet
        Play.prototype.bulletSpawn = function () {
            for (var count = 0; count < this.bulletNum; count++) {
                this.bullet[count] = new objects.Bullet(this.assetManager);
                this.addChild(this.bullet[count]);
            }
        };
        Play.prototype.bulletFire = function () {
            this.bullet[this.bulletCounter].x = this.player.bulletSpawn.x;
            this.bullet[this.bulletCounter].y = this.player.bulletSpawn.y;
            this.bullet[this.bulletCounter].isFired = true;
            this.gunFired = true;
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