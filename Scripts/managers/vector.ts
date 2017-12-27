module managers{
    
        //Vector - inherit Point class
        export class Vector extends createjs.Point {
            constructor(x: number = 0, y: number = 0) {
                super(x, y);
            }

            /**
             * returns the length of this Vector
             * 
             * @returns {number} 
             * @memberof Vector
             */
            public static ToPoint(point: createjs.Point): Vector {
                return new Vector(point.x, point.y);
            }
    
            /**
             * returns the length of this Vector
             * 
             * @returns {number} 
             * @memberof Vector
             */
            public Magnitude(): number {
                return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
            }
    
            /**
             * returns a Vector with the same direction and a length of 1
             * 
             * @memberof Vector
             */
            public Normalize(): Vector {
                return this.Multiply(1 / this.Magnitude());
            }
    
            /**
             * returns the sum of this Vector and another Vector
             * 
             * @param {Vector} other the other Vector, to be added to this one
             * @returns {Vector} 
             * @memberof Vector
             */
            public Add(other: Vector): Vector {
                return new Vector(this.x + other.x, this.y + other.y);
            }
    
            /**
             * returns the product of this Vector and a number
             * 
             * @param {number} other the number to multiply this Vector by
             * @returns {Vector} 
             * @memberof Vector
             */
            public Multiply(other: number): Vector {
                return new Vector(this.x * other, this.y * other);
            }
    
    
            /**
             * calculates and returns the distance between two Vectors
             * 
             * @static
             * @param {Vector} a first Vector
             * @param {Vector} b the other Vector
             * @returns {number} 
             * @memberof Vector
             */
            public static Distance(a: Vector, b: Vector): number {
                return Math.floor(Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)));
            }
            /**
             * This method rotates a vector based on a rotation in degrees
             * @param {Vector} rotation 
             * @returns {number}
             * @memberof Vector
             */
            public Rotate(rotation: number):Vector{
                let radRotation:number;
                radRotation =  rotation * Math.PI / 180;
    
                return new Vector( this.x * Math.cos(radRotation) - this.y * Math.sin(radRotation),
                                    this.x * Math.sin(radRotation) + this.y * Math.cos(radRotation)
                                    );
            }
    
            /**
             * It defines the current angle of the vector in the world.
             */
            public Rotation():number {
                return Math.atan2(this.y, this.x) * 180/Math.PI;
            }
    
            /**
             * calculates and returns a Vector representing a rotation's forward direction
             * 
             * @static
             * @param {number} rot rotation, in degrees
             * @returns {Vector} 
             * @memberof Vector
             */
            public static DegreeToVector(rot: number): Vector {
                return new Vector(Math.cos(rot * Math.PI / 180), Math.sin(rot * Math.PI / 180));
            }
    
             /**
             * calculates and returns a rotation from currentVector to targetVector
             * 
             * @static
             * @param {Vector} currentVector current position, @param {Vector} targetVector  
             * @returns {number} rotation
             * @memberof number
             */
            public static RotateTowardPosition(currentVector: Vector, targetVector: Vector): number{
                return Math.atan2(targetVector.y - currentVector.y, targetVector.x - currentVector.x) * (180/Math.PI);
            }
            /**
             * calculates and returns the next postion according to the provided vectors and speed
             * Ed: may not need, use Forward() instead
             * @static
             * @param {Vector} currentVector current position, @param {Vector} targetVector  degrees @param {number} speed 
             * @returns {Vector} rotation
             * @memberof number
             */
            public static movePosition(currentVector: Vector, targetVector: Vector, speed){
                let distanceVector = new Vector(currentVector.x-targetVector.x, currentVector.y-targetVector.y);
                //you call this to get a normal of 1 in the desired direction 
                let returnDistanceVector = new Vector();
                returnDistanceVector.x = (distanceVector.x /( distanceVector.x + distanceVector.y));
                returnDistanceVector.y = (distanceVector.y /( distanceVector.x + distanceVector.y));
                return returnDistanceVector;
            }
    
    
            public static UP = new Vector(1, 0);
            public static RIGHT = new Vector(0, 1);
        }
    }