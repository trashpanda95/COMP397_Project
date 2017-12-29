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
            this.gameTitle = new objects.Label("THE INVASION", "80px", "Dock51", "#00000", 400, 250, true);
            this.addChild(this.gameTitle);

            this.startButton = new objects.Button("startBtn", 400, 350, true);
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