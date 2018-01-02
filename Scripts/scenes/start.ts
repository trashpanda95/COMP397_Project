module scenes {
    export class Start extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private gameTitle: objects.Label;
        private startButton: objects.Button;

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
            this.gameTitle = new objects.Label("THE INVASION", "80px", "Dock51", "#00000", config.Screen.WIDTH/2, config.Screen.HEIGHT/3, true);
            this.addChild(this.gameTitle);

            this.startButton = new objects.Button("startBtn", config.Screen.WIDTH/2, config.Screen.HEIGHT/2, true);
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