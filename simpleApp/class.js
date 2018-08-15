class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayInfo() {
        console.log(`Name: ${this.model}; 
        Year: ${this.year}; 
        Max Speed: ${this.maxSpeed}; 
        Type: ${this.type}`)
    }
}


class Car extends Vehicle{
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I am starting transporting passengers`);
    }

    displayInfo(){
        super.displayInfo();
        console.log(`Additional text`);
    }
}

class Truck extends Vehicle{
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportPeople() {
        console.log(`I am starting transporting heavy container`);
    }
}

class TestCar extends Vehicle{
}

let volvo = new Car("XC60", 2015, 220);
volvo.displayInfo();
volvo.transportPeople();

let bmw = new Truck("X5", 2018, 150);
bmw.displayInfo();
bmw.transportPeople();

let testCar = new TestCar("TC1", 2019, 300);
testCar.displayInfo();

