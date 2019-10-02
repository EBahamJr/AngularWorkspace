"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function (value) {
            this._y =  = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(2, 3);
point.draw();
