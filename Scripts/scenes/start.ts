module scenes {
    export class Start extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _assetManager: createjs.LoadQueue;
        private _player:objects.Player;

        //PUBLIC PROPETIES

        //CONSTRUCTORS
        constructor(assetManager:createjs.LoadQueue)
        {
            super();
            this._assetManager = assetManager;
            //this._currentScene = currentScene;
            this.Start(); 
        }

        //PRIVATE METHOS

        //PUBLIC METHODS
        public Start():void
        {
            this._player = new objects.Player(this._assetManager);
            this.Main();
        }

        public Update():void
        {
            this._player.Update();

            //return this._currentScene;
        }

        public Main():void
        {
            this.addChild(this._player);
        }
    }
}