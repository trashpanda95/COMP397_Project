module scenes {
    export class Level1 extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private _assetManager:createjs.LoadQueue;

        //PUBLIC PROPETIES

        //CONSTRUCTORS
        constructor(assetManager:createjs.LoadQueue, currentScene:number)
        {
            super();
            this._assetManager = assetManager;
            this._currentScene = currentScene;
        }

        //PRIVATE METHOS

        //PUBLIC METHODS
        public Start():void
        {

        }

        public Update():void
        {

        }

        public Main():void
        {

        }
    }
}