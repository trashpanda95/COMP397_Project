module scenes {
    export class Start extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private gameTitle: objects.Label;
        private gameTitleOutline: objects.Label;
        private startButton: objects.Button;
        private startImage:objects.Image;
        //PUBLIC PROPETIES

        //CONSTRUCTORS
        constructor(currentScene: number)
        {
            super();
            this.currentScene = currentScene;
            this.Start(); 
        }

        //PRIVATE METHOS

        //PUBLIC METHODS
        public Start():void
        {
            this.startImage = new objects.Image("startimage");
            this.startButton = new objects.Button("startBtn", config.Screen.WIDTH/2, config.Screen.HEIGHT/2, true);
            this.gameTitle = new objects.Label("THE INVASION", "100px", "Gesso", "#000000", config.Screen.WIDTH/4*2.3, config.Screen.HEIGHT/4, true);
            this.gameTitleOutline = new objects.Label("THE INVASION", "100px", "Gesso", "#FFFFFF", config.Screen.WIDTH/4*2.3, config.Screen.HEIGHT/4, true);
            this.gameTitleOutline.outline = 1;

            this.addChild(this.startImage);
            this.addChild(this.startButton);
            this.addChild(this.gameTitleOutline);
            this.addChild(this.gameTitle);
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