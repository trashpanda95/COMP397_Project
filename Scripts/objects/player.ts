module objects {
    export class Player extends createjs.Bitmap
    {
        //PRIVATE INSTANCE VARIBALES
        width:number;
        height:number;
        halfWidth:number;
        halfHeight:number;
        stage:createjs.Stage;
        canvas: any;
        
        //PUBLIC PROPERTIES

        //CONSTRUCTORS
        constructor(assetManager: createjs.LoadQueue)
        {
            super(assetManager.getResult("player"));
            this.Start();
        }
        //PRIVATE METHODS
        private regXY():void
        {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }        
        private _checkBounds() {
            if(this.x >= 640 - this.halfWidth) {
              this.x = 640 - this.halfWidth;
            }
            if(this.x <= this.halfWidth) {
              this.x = this.halfWidth;
            }
          }
        //PUBLIC METHODS
        public Start()
        {   
            this.regXY();
            this.x = 400;
            this.y = 300;
            this.scaleX= 0.3;
            this.scaleY= 0.3;
        }
        public Update()
        {
            console.log("player.ts Update");
            this.x= this.stage.mouseX;    
        }
    }
}