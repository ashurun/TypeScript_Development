interface Car{
    specification():void;
}

class DieselCar implements Car{

    private make : string;
    private year : number;
    private capacity:string;
    private milage : string;

    constructor(make:string,year:number,capacity:string,milage:string){
        this.make = make;
        this.year = year;
        this.capacity = capacity;
        this.milage = milage;
    }

    public  get getMake():string{
        return this.make;
    }

    public set setMake(make){
        this.make = make;
    }

    public get getYear():number{
        return this.year;
    }

    public set setYear(year){
        this.year = year;
    }

    public get getCapacity():string{
        return this.capacity;
    }

    public set setCapacity(capacity){
        this.capacity = capacity;
    }

    public get getMilage():string{
        return this.milage;
    }

    public set setMilage(milage){
        this.milage = milage;
    }

    public specification():void{
        let output = `Make : ${this.getMake} 
                      Year : ${this.getYear}
                      Capacity : ${this.getCapacity}
                      Milage : ${this.getMilage}`;
        console.log(output);
        document.getElementById('display').innerHTML = output;
    }
}

let dieselCar = new DieselCar('Benz',2018,'2000CC','10KMPL');
dieselCar.specification();