var Car = (function () {
    function Car(carName, yearOfMfg, mileage, horsePower) {
        this.carName = carName;
        this.yearOfMfg = yearOfMfg;
        this.mileage = mileage;
        this.horsePower = horsePower;
    }
    Car.prototype.getCarName = function () {
        return this.carName;
    };
    Car.prototype.getYearOfMfg = function () {
        return this.yearOfMfg;
    };
    Car.prototype.getMileage = function () {
        return this.mileage;
    };
    Car.prototype.getHorsePower = function () {
        return this.horsePower;
    };
    Car.prototype.specification = function () {
        var spec = "Car Name : " + this.getCarName() + "\n                    Year Of Mfg : " + this.getYearOfMfg() + "\n                    Mileage : " + this.getMileage() + "\n                    Horse Power : " + this.getHorsePower();
        return spec;
    };
    return Car;
}());
var car = new Car('Audi', 2018, '10kmpl', '1000rpm');
var output = car.specification();
console.log(output);
