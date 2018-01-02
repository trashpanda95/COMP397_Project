module objects {
  export class WindowLeft extends objects.GameObject {
    // PRIVATE INSTANCE VARIABLES

    // CONSTRUCTORS
    constructor() {
      super("windowLeft");
      this.Start();
    }
    public Start(): void //Start method runs when object is instantiated
    {
      this.y = 338;
      this.x = 115;
      this.windowLeftHealth = 100;
      this.isBroken = false;
      this.regXY();
    }


    public Update(): void //Update method runs 60fps
    { }

    public Reset(): void { }

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
  }
}
  