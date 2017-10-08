module objects {
    export class Player extends createjs.Bitmap
    {
        //PRIVATE INSTANCE VARIBALES

        //PUBLIC PROPERTIES

        //CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue)
        {
            super(assetManager.getResult("player"));
        }

        //PRIVATE METHODS

        //PUBLIC METHODS

        public Start()
        {}
        public Update()
        {}
    }
}