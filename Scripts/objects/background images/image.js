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
var objects;
(function (objects) {
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        // PRIVATE INSTANCE VARIABlES +++++++++++
        // PUBLIC PROPERTIES ++++++++++++++++++++
        // CONSTRUCTORS +++++++++++++++++++++++++
        /**
         * Creates an instance of Image.
         *
         * @param {createjs.LoadQueue} assetManager
         * @param {string} imageName
         */
        function Image(imageName) {
            return _super.call(this, objects.Game.assetManager.getResult(imageName)) || this;
        }
        return Image;
    }(createjs.Bitmap));
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=image.js.map