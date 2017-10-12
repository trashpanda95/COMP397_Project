module objects {
  export class Scene extends createjs.Container {
    // PRIVATE INSTANCE VARIABLES
    protected currentScene: number;

    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor() 
    {
      super();
    }
    // PRIVATE METHODS

    // PUBLIC METHODS

    /**
     * Initialize Componenets here
     */
    public Start():void {

    }

    /**
     * Update elements in the scene
     */
    public Update():number {
      return this.currentScene;
    }

    /**
     *  Add elements in the Main Method
     */
    public Main():void {

    }
  }
}