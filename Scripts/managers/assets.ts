//Asset Manager
module managers {
    export interface AssetItem {
        id: string;
        src: string;
    }

    let assetManifest = [
        { id: "startBtn", src: "./Assets/startButton.png" },
        { id: "reStartBtn", src: "./Assets/reStartButton.png" },
        { id: "player", src: "./Assets/images/player_test.png" },
        { id: "zombie", src: "./Assets/images/zombie_test.png" },
        { id: "bg", src: "./Assets/images/background_test.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "level1BG", src: "./Assets/images/Level1BG.png"},
        { id: "leftWall", src: "./Assets/images/walls/leftWall.png"},
        { id: "topWall", src: "./Assets/images/walls/topWall.png"}
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