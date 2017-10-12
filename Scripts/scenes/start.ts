module scenes {
    export class Start extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _assetManager: createjs.LoadQueue;
        private _player:objects.Player;

        //PUBLIC PROPETIES

        //CONSTRUCTORS
        constructor(assetManager:createjs.LoadQueue, currentScene: number)
        {
            super();
            this._assetManager = assetManager;
            this.currentScene = currentScene;
            this.Start(); 
        }

        //PRIVATE METHOS

        //PUBLIC METHODS
        public Start():void
        {
            this._player = new objects.Player(this._assetManager);
            this.Main();
        }

        public Update():number
        {
            this._player.Update();
            return this.currentScene;
        }

        public Main():void
        {
            this.addChild(this._player);
        }
    }
}