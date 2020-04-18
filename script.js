class Spaceship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}


const ussAssembly = new Spaceship("USS Assembly", 20, 5, 0.7);

console.log(ussAssembly);
