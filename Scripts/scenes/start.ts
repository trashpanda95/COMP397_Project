module scenes {
    export class Start extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private assetManager: createjs.LoadQueue;

        private gameTitleOutline: objects.Label;
        private gameTitle: objects.Label;
        private startButton: objects.Button;

        private backgroundImage: objects.StartBackGround;

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
            // Outlines the Title
            this.gameTitleOutline = new objects.Label("THE INVASION", "80px", "Dock51", "#FFFFFF", 400, 250, true);
            this.gameTitleOutline.outline = 1;

            // Fills the Title Outline in Black
            this.gameTitle = new objects.Label("THE INVASION", "80px", "Dock51", "#00000", 400, 250,true);

            // Initialize Background Image
            this.backgroundImage = new objects.StartBackGround(this.assetManager);

            // Initialize Start Button
            this.startButton = new objects.Button(this.assetManager, "startBtn", 400, 350, true);

            // Adds Background Image to Screen
            this.addChild(this.backgroundImage);

            // Adds Both the Label Outline & Fill onto Screen
            this.addChild(this.gameTitleOutline);
            this.addChild(this.gameTitle);

            // Adds Start Button onto Screen
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