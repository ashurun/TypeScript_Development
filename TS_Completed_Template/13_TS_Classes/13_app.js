var DieselCar = /** @class */ (function () {
    function DieselCar(make, year, capacity, milage) {
        this.make = make;
        this.year = year;
        this.capacity = capacity;
        this.milage = milage;
    }
    Object.defineProperty(DieselCar.prototype, "getMake", {
        get: function () {
            return this.make;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DieselCar.prototype, "setMake", {
        set: function (make) {
            this.make = make;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DieselCar.prototype, "getYear", {
        get: function () {
            return this.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DieselCar.prototype, "setYear", {
        set: function (year) {
            this.year = year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DieselCar.prototype, "getCapacity", {
        get: function () {
            return this.capacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DieselCar.prototype, "setCapacity", {
        set: function (capacity) {
            this.capacity = capacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DieselCar.prototype, "getMilage", {
        get: function () {
            return this.milage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DieselCar.prototype, "setMilage", {
        set: function (milage) {
            this.milage = milage;
        },
        enumerable: true,
        configurable: true
    });
    DieselCar.prototype.specification = function () {
        var output = "Make : " + this.getMake + " \n                      Year : " + this.getYear + "\n                      Capacity : " + this.getCapacity + "\n                      Milage : " + this.getMilage;
        console.log(output);
        document.getElementById('display').innerHTML = output;
    };
    return DieselCar;
}());
var dieselCar = new DieselCar('Benz', 2018, '2000CC', '10KMPL');
dieselCar.specification();
