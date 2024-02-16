"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(manufacturer, model) {
        this.manufacturer = manufacturer;
        this.model = model;
    }
    Vehicle.prototype.setSpeedLimit = function () {
        return 80;
    };
    return Vehicle;
}());
// const newVehicle = new Vehicle()   Instance of abstract class can't be created
// Inheritence using extends
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(manufacturer, model, numWheels) {
        var _this = _super.call(this, manufacturer, model) || this;
        _this.manufacturer = manufacturer;
        _this.model = model;
        _this.numWheels = numWheels;
        return _this;
    }
    // Implementing abstract method from parent
    Car.prototype.start = function () {
        console.log("".concat(this.manufacturer, " ").concat(this.model, " has ").concat(this.numWheels, " wheels"));
    };
    return Car;
}(Vehicle));


var myCar = new Car("Toyota", "Corolla", 4);
myCar.start();
console.log("Speed Limit", myCar.setSpeedLimit());
