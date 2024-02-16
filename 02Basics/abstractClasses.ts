abstract class Vehicle {
  constructor(protected manufacturer: string, protected model: string) {}
  abstract start(): void; //abstract method - need implementation in subclass
  setSpeedLimit(): number {
    return 80;
  }
}

// const newVehicle = new Vehicle()   Instance of abstract class can't be created

// Inheritence using extends
class Car extends Vehicle {
  constructor(
    public manufacturer: string,
    public model: string,
    private numWheels: number
  ) {
    super(manufacturer, model);
  }
  // Implementing abstract method from parent
  start(): void {
    console.log(
      `${this.manufacturer} ${this.model} has ${this.numWheels} wheels`
    );
  }
}

const myCar = new Car("Toyota", "Corolla", 4);
myCar.start();
console.log("Speed Limit", myCar.setSpeedLimit());

export {};
