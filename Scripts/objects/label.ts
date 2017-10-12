module objects {
    export class Label extends createjs.Text{
        //PRIVATE INSTANCE VARIABLES

        //PUBLIC PROPERTIES

        //CONSTRUCTOR
        /**
         * @param labelstring 
         * @param fontSize 
         * @param fontFamily 
         * @param fontColor 
         * @param x 
         * @param y 
         * @param isCentered 
         */
        constructor(labelstring:string, fontSize:string,  fontFamily:string, fontColor:string, x:number, y:number, isCentered:boolean)
        {
            super(labelstring, fontSize+" "+fontFamily, fontColor);

            if(isCentered)
            {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
            return this;
        }

        //PRIVATE METHODS

        //PUBLIC METHODS
    }
}