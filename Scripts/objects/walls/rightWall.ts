module objects {
    export class RightWall extends objects.GameObject {
      // PRIVATE INSTANCE VARIABLES
      private assetManager: createjs.LoadQueue;
      public width:number;
      public height:number;
      public halfWidth:number;
      public halfHeight:number;
      public verticalSpeed:number;
      public horizontalSpeed:number;
      public regX :number;
      public regY : number;
  
      // CONSTRUCTORS
      constructor() 
      {   
        super("rightWall");
        this.y= 71;
        this.x = 945;
      }
        // PRIVATE METHODS
        private regXY(): void                               //Method to set bitmap registry point at the center
        {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width / 2;
            this.halfHeight = this.height / 2;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }

        public Start(): void //Start method runs when object is instantiated
        { }

        public Update(): void //Update method runs 60fps
        { }

        public Reset(): void { }
    }
  }
  