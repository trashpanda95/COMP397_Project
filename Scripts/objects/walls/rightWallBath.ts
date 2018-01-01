module objects {
    export class WallRightBath
     extends objects.GameObject {
      // PRIVATE INSTANCE VARIABLES
    
      // CONSTRUCTORS
      constructor() 
      {   
        super("rightWallBath")
        this.y=368;
        this.x = 615;
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
  