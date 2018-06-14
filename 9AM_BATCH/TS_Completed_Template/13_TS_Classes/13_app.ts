interface Vehicle{
    specification():string;
}

class Car implements Vehicle{

    private carName:string;
    private yearOfMfg : number;
    private mileage : string;
    private horsePower : string;

    constructor(carName , yearOfMfg , mileage , horsePower){
        this.carName = carName;
        this.yearOfMfg = yearOfMfg;
        this.mileage = mileage;
        this.horsePower = horsePower;
    }

    public getCarName():string{
        return this.carName;
    }

    public getYearOfMfg():number{
        return this.yearOfMfg;
    }

    public getMileage():string{
        return this.mileage;
    }

    public getHorsePower():string{
        return this.horsePower;
    }

    public specification():string{
        let spec = `Car Name : ${this.getCarName()}
                    Year Of Mfg : ${this.getYearOfMfg()}
                    Mileage : ${this.getMileage()}
                    Horse Power : ${this.getHorsePower()}`;
        return spec;
    }
}

let car = new Car('Audi',2018,'10kmpl','1000rpm');
let output:string = car.specification();
console.log(output);
