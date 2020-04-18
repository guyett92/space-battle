class Spaceship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.alive = true;
    }
    checkShipStatus() {
      if (this.hull <= 0) {
        this.alive = false;
      }
    }
    defend() {
      let indexPos = 0;
      if (ships[indexPos]["alive"] === true) {
        this.hull -= ships[indexPos]["firepower"];
      } else {
        indexPos += 1;
      }
      // checkShipStatus();
    }
    attack() {
      this.firepower
    }
}


function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  }

const ussAssembly = new Spaceship("USS Assembly", 20, 5, 0.7);
const captainAmerica = new Spaceship("USS Captain America", randInt(3,7), randInt(2, 5), (randInt(6, 9) / 10));
const ironMan = new Spaceship("USS Ironman", randInt(3, 7), randInt(2, 5), (randInt(6, 9) / 10))
const blackWidow = new Spaceship("USS Black Widow", randInt(3,7), randInt(2, 5), (randInt(6, 9) / 10));
const hulk = new Spaceship("USS Hulk", randInt(3,7), randInt(2, 5), (randInt(6, 9) / 10));
const thor = new Spaceship("USS Thor", randInt(3,7), randInt(2, 5), (randInt(6, 9) / 10));
const hawkEye = new Spaceship("USS Hawkeye", randInt(3,7), randInt(2, 5), (randInt(6, 9) / 10));
const loki = new Spaceship("USS Loki", randInt(3,7), randInt(2, 5), (randInt(6, 9) / 10));


let ships = [captainAmerica, ironMan, blackWidow, hulk, thor, hawkEye, loki];
ussAssembly.defend(ironMan);
console.log(ussAssembly);
