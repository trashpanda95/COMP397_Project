module objects {
    export class Player extends createjs.Bitmap
    {
        //PRIVATE INSTANCE VARIBALES
        width:number;
        height:number;
        halfWidth:number;
        halfHeight:number;

        //PUBLIC PROPERTIES

        //CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue)
        {
            super(assetManager.getResult("player"));
            this.Start();
        }
        //PRIVATE METHODS
        
        //PUBLIC METHODS
        public Start()
        {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 420;
            this.y = 300;
            this.scaleX= 0.3;
            this.scaleY= 0.3;
        }
        public Update()
        {
            this.x = this.stage.mouseX;
        }
    }
}