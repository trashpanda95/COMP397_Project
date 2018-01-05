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

  // Controller Constants
  export enum Gamepad {
    HORIZONTAL,
    VERTICAL,
    ROTATION
  }

  export class Key {
    // Keyboard values
    public static A: number = 65;
    public static CTRL: number = 17;
    public static D: number = 68;
    public static DOWN_ARROW: number = 40;
    public static ESCAPE: number = 27;
    public static LEFT_ARROW: number = 37;
    public static RIGHT_ARROW: number = 39;
    public static S: number = 83;
    public static SHIFT: number = 16;
    public static SPACEBAR: number = 32;
    public static UP_ARROW: number = 38;
    public static W: number = 87;
    public static NUM_PAD_0:number = 96;
}
}