var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var managers;
(function (managers) {
    //Vector - inherit Point class
    var Vector = /** @class */ (function (_super) {
        __extends(Vector, _super);
        function Vector(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            return _super.call(this, x, y) || this;
        }
        /**
         * returns the length of this Vector
         *
         * @returns {number}
         * @memberof Vector
         */
        Vector.ToPoint = function (point) {
            return new Vector(point.x, point.y);
        };
        /**
         * returns the length of this Vector
         *
         * @returns {number}
         * @memberof Vector
         */
        Vector.prototype.Magnitude = function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        };
        /**
         * returns a Vector with the same direction and a length of 1
         *
         * @memberof Vector
         */
        Vector.prototype.Normalize = function () {
            return this.Multiply(1 / this.Magnitude());
        };
        /**
         * returns the sum of this Vector and another Vector
         *
         * @param {Vector} other the other Vector, to be added to this one
         * @returns {Vector}
         * @memberof Vector
         */
        Vector.prototype.Add = function (other) {
            return new Vector(this.x + other.x, this.y + other.y);
        };
        /**
         * returns the product of this Vector and a number
         *
         * @param {number} other the number to multiply this Vector by
         * @returns {Vector}
         * @memberof Vector
         */
        Vector.prototype.Multiply = function (other) {
            return new Vector(this.x * other, this.y * other);
        };
        /**
         * calculates and returns the distance between two Vectors
         *
         * @static
         * @param {Vector} a first Vector
         * @param {Vector} b the other Vector
         * @returns {number}
         * @memberof Vector
         */
        Vector.Distance = function (a, b) {
            return Math.floor(Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)));
        };
        /**
         * This method rotates a vector based on a rotation in degrees
         * @param {Vector} rotation
         * @returns {number}
         * @memberof Vector
         */
        Vector.prototype.Rotate = function (rotation) {
            var radRotation;
            radRotation = rotation * Math.PI / 180;
            return new Vector(this.x * Math.cos(radRotation) - this.y * Math.sin(radRotation), this.x * Math.sin(radRotation) + this.y * Math.cos(radRotation));
        };
        /**
         * It defines the current angle of the vector in the world.
         */
        Vector.prototype.Rotation = function () {
            return Math.atan2(this.y, this.x) * 180 / Math.PI;
        };
        /**
         * calculates and returns a Vector representing a rotation's forward direction
         *
         * @static
         * @param {number} rot rotation, in degrees
         * @returns {Vector}
         * @memberof Vector
         */
        Vector.DegreeToVector = function (rot) {
            return new Vector(Math.cos(rot * Math.PI / 180), Math.sin(rot * Math.PI / 180));
        };
        /**
        * calculates and returns a rotation from currentVector to targetVector
        *
        * @static
        * @param {Vector} currentVector current position, @param {Vector} targetVector
        * @returns {number} rotation
        * @memberof number
        */
        Vector.RotateTowardPosition = function (currentVector, targetVector) {
            return Math.atan2(targetVector.y - currentVector.y, targetVector.x - currentVector.x) * (180 / Math.PI);
        };
        /**
         * calculates and returns the next postion according to the provided vectors and speed
         * @static
         * @param {Vector} currentVector current position, @param {Vector} targetVector  degrees @param {number} speed
         * @returns {Vector} rotation
         * @memberof number
         */
        Vector.movePosition = function (currentVector, targetVector, speed) {
            var distanceVector = new Vector(currentVector.x - targetVector.x, currentVector.y - targetVector.y);
            //you call this to get a normal of 1 in the desired direction 
            var returnDistanceVector = new Vector();
            returnDistanceVector.x = (distanceVector.x / (distanceVector.x + distanceVector.y));
            returnDistanceVector.y = (distanceVector.y / (distanceVector.x + distanceVector.y));
            return returnDistanceVector;
        };
        Vector.UP = new Vector(1, 0);
        Vector.RIGHT = new Vector(0, 1);
        return Vector;
    }(createjs.Point));
    managers.Vector = Vector;
})(managers || (managers = {}));
//# sourceMappingURL=vector.js.map