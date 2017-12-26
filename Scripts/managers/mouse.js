var managers;
(function (managers) {
    var Mouse = /** @class */ (function () {
        // CONSTRUCTOR 
        function Mouse(player, area) {
            this.listeners = [];
            this.player = player;
            this.area = area;
        }
        Mouse.prototype.Update = function () {
        };
        Mouse.prototype.AddClickListener = function (listener) {
            this.area.addEventListener("click", listener);
            this.listeners.push(listener);
        };
        Mouse.prototype.RemoveAllListeners = function () {
            var _this = this;
            this.listeners.forEach(function (listener) { _this.area.removeEventListener("click", listener); });
        };
        return Mouse;
    }());
    managers.Mouse = Mouse;
})(managers || (managers = {}));
//# sourceMappingURL=mouse.js.map