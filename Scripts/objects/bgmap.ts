module objects {
  export class Bgmap extends createjs.Shape {
    // PRIVATE INSTANCE VARIABLES
    private assetManager: createjs.LoadQueue;

    // CONSTRUCTORS
    constructor(imageString: string) 
    {
      let graphics = new createjs.Graphics().beginBitmapFill(imageString).drawRect(0, 0, config.Screen.WIDTH, config.Screen.HEIGHT);
      super(graphics);

      console.log("Map Created");
    }
    // PRIVATE METHODS
    public Reset(): void {
      this.y = 0;
    }

    private _checkBounds(): void {
      if (this.y > 0) {
        this.Reset();
      }
    }

    // PUBLIC METHODS
    public Start(): void {
      console.log("Floor start");
      this.Reset();
    }

    public Update(): void {
      this._checkBounds();
    }

  }
}
