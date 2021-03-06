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
    Point.prototype.getX = function () {
        return this._x;
    };
    Point.prototype.setY = function (value) {
        this._y = value;
    };
    return Point;
}());
exports.Point = Point;
