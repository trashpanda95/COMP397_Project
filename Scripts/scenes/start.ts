module scenes {
    export class Start extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private gameTitle: objects.Label;
        private gameTitleOutline: objects.Label;
        private startButton: objects.Button;
        private startImage:objects.Image;
        private backgroundMusic: createjs.AbstractSoundInstance;
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
            this.backgroundMusic = createjs.Sound.play ("backgroundStart",0,0,0,-1,0.25,0);
            this.startImage = new objects.Image("startimage");
            this.startButton = new objects.Button("startBtn", config.Screen.WIDTH/2, config.Screen.HEIGHT/2, true);
            this.gameTitle = new objects.Label("THE INVASION", "100px", "Boycott", "#000000", config.Screen.WIDTH/4*2.3, config.Screen.HEIGHT/4, true);
            //this.gameTitleOutline = new objects.Label("THE INVASION", "100px", "Boycott", "#FFFFFF", config.Screen.WIDTH/4*2.3, config.Screen.HEIGHT/4, true);
            //this.gameTitleOutline.outline = 1;

            this.addChild(this.startImage);
            this.addChild(this.startButton);
            //this.addChild(this.gameTitleOutline);
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
                this.backgroundMusic.stop();
                this.currentScene = config.Scene.LEVEL1;
                this.removeAllChildren();
            });
        }
    }
}