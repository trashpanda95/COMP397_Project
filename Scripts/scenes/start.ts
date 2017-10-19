module scenes {
    export class Start extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private assetManager: createjs.LoadQueue;
        private gameTitle: objects.Label;
        private startButton: objects.Button;

        //PUBLIC PROPETIES

        //CONSTRUCTORS
        constructor(assetManager:createjs.LoadQueue, currentScene: number)
        {
            super();
            this.assetManager = assetManager;
            this.currentScene = currentScene;
            this.Start(); 
        }

        //PRIVATE METHOS

        //PUBLIC METHODS
        public Start():void
        {
            this.gameTitle = new objects.Label("THE INVASION", "80px", "Dock51", "#00000", 400, 250, true);
            this.addChild(this.gameTitle);

            this.startButton = new objects.Button(this.assetManager, "startBtn", 400, 350, true);
            this.addChild(this.startButton);
            this.onClickStartBtn();
        }

        public Update():number
        {
            return this.currentScene;
        }

        public onClickStartBtn()
        {
            this.startButton.on("click", () =>
            {
                this.currentScene = config.Scene.PLAY;
                this.removeAllChildren();
            });
        }
    }
}