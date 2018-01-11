module objects {
  export class Image extends createjs.Bitmap {
    // PRIVATE INSTANCE VARIABlES +++++++++++
    // PUBLIC PROPERTIES ++++++++++++++++++++
    // CONSTRUCTORS +++++++++++++++++++++++++
    /**
     * Creates an instance of Image.
     *
     * @param {createjs.LoadQueue} assetManager
     * @param {string} imageName
     */
    constructor(imageName:string)
    {
      super(objects.Game.assetManager.getResult(imageName));
    }
  }
}