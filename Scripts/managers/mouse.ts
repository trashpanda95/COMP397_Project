module managers {
    export class Mouse {
      // PRIVATE INSTANCE VARIABLES
      private _dx:number;
      private _dy:number;

      // PUBLIC INSTANCE VARIABLES
      public direction:number;
      public player:objects.GameObject;
      private listeners = [];
      public area:HTMLElement;
  
      // CONSTRUCTOR 
      constructor(player:objects.GameObject, area:HTMLElement) 
      {
        this.player = player;
        this.area = area;
      }
  
      public Update():void 
      {

      }

      public AddClickListener(listener: { (event:any): void }): void
      {
        this.area.addEventListener("click", listener);
        this.listeners.push(listener);
      }
  
      public RemoveAllListeners()
      {
        this.listeners.forEach((listener)=>{this.area.removeEventListener("click", listener)});
      }
    }
  }