//Asset Manager
module managers {
    export interface AssetItem {
        id: string;
        src: string;
    }

    let assetManifest = [
        // Audio
        { id: "gunFire", src: "./Assets/audio/gun_fire.wav" },
        { id: "endSound", src: "./Assets/audio/endbgs.mp3" },
        { id: "zombieHit", src: "./Assets/audio/zombie_hit.mp3" },
        { id: "backgroundMusic", src: "./Assets/audio/Day of Chaos.mp3" },
        { id: "backgroundStart", src: "./Assets/audio/Bump in the Night.mp3" },
        // Images
        { id: "startBtn", src: "./Assets/startButton.png" },
        { id: "reStartBtn", src: "./Assets/reStartButton.png" },
        { id: "player", src: "./Assets/images/player_test.png" },
        { id: "zombie", src: "./Assets/images/zombie_test.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "level1BG", src: "./Assets/images/Level1BG.png"},
        { id: "level2BG", src: "./Assets/images/Level2BG.png"},
        { id: "leftWallTop", src: "./Assets/images/walls/leftWallTop.png"},
        { id: "leftWallBottom", src: "./Assets/images/walls/leftWallBottom.png"},
        { id: "topWall", src: "./Assets/images/walls/topWall.png"},
        { id: "bottomWall", src: "./Assets/images/walls/bottomWall.png"},
        { id: "rightWallBath", src: "./Assets/images/walls/rightWallBath.png"},
        { id: "mainGateWallLeft", src: "./Assets/images/walls/mainGateWallLeft.png"},
        { id: "mainGateWallRight", src: "./Assets/images/walls/mainGateWallRight.png"},
        { id: "insideHorizontalWall", src: "./Assets/images/walls/insideHorizontalWall.png"},
        { id: "insideVerticalWall", src: "./Assets/images/walls/insideVerticalWall.png"},
        { id: "rightWall", src: "./Assets/images/walls/rightWall.png"},
        { id: "windowLeft", src: "./Assets/images/window/windowLeft.png"},
        { id: "windowRight", src: "./Assets/images/window/windowRight.png"},
        { id: "level2_wallLeftTop", src: "./Assets/images/walls/level2_wallLeftTop.png"},
        { id: "level2_wallLeftBottom", src: "./Assets/images/walls/level2_wallLeftBottom.png"},
        { id: "level2_wallBottomLeft", src: "./Assets/images/walls/level2_wallBottomLeft.png"},
        { id: "level2_wallRight", src: "./Assets/images/walls/level2_wallRight.png"},
        { id: "level2_windowLeft", src: "./Assets/images/window/level2_windowLeft.png"},
        { id: "level2_windowRight", src: "./Assets/images/window/level2_windowRight.png"},
        { id: "startimage", src: "./Assets/images/startimage.jpg"},
        { id: "blackout", src: "./Assets/images/blackout.jpg"},
        { id: "endimage", src: "./Assets/images/endimage.jpg"}
    ];

    export class AssetManager extends createjs.LoadQueue {
        public manifest: AssetItem[] = new Array<AssetItem>();

        constructor() {
            super();
            this.manifest = assetManifest;
            this.installPlugin(createjs.Sound);
            this.loadManifest(this.manifest);
        }

        public addItem(id: string, src: string): void {
            this.manifest.push({ id, src });
            this.loadManifest(this.manifest);
        }
    }
}