module config 
{
  //Scene Constants
  export class Scene 
  {
    public static START:number = 0;
    public static PLAY:number = 1;
    public static END:number = 2;
  }

  //Screen Constants
  export class Screen
  {
    public static WIDTH: number = 1000;
    public static HEIGHT: number = 700;
    //public static CENTER_X: number = 320;
    //public static CENTER_Y: number = 240;
  }

  // Game Constants
  export class Game 
  {
    public static FPS: number = 60;
  }  
}