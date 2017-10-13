module scenes {
    export class Play extends objects.Scene
    {
        //PRIVATE INSTANCE VARIABLES
        private assetManager: createjs.LoadQueue;
        private player:objects.Player;
        private zombie:objects.Zombie[];

        //PUBLIC PROPETIES

        //CONSTRUCTORS
        constructor(assetManager:createjs.LoadQueue, currentScene: number)
        {
            super();
            this.assetManager = assetManager;
            this.currentScene = currentScene;
            this.Start(); 
        }

        //PRIVATE METHOS

        //PUBLIC METHODS
        public Start():void
        {
            this.player = new objects.Player(this.assetManager);
            this.zombie = new Array<objects.Zombie>();
            this.Main();
        }

        public Update():number
        {
            this.player.Update();
            this.zombie.forEach(zombies =>{zombies.Update();});
            return this.currentScene;
        }

        public Main():void
        {
            this.addChild(this.player);

            for (let count = 0; count < 10; count++)
            {
                this.zombie[count] = new objects.Zombie(this.assetManager);
                this.addChild(this.zombie[count]);
                console.log(this.zombie[count]);
            }
        }
    }
}