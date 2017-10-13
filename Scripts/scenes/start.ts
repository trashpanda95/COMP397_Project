module scenes {
    export class Start extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _assetManager: createjs.LoadQueue;

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
            this.Main();
        }

        public Update():number
        {
            return this.currentScene;
        }

        public Main():void
        {
        }
    }
}