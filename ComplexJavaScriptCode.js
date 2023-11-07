// Filename: ComplexJavaScriptCode.js
// Description: This code demonstrates a complex simulation of a dynamic ecosystem.

// Utility function to generate random numbers within a range
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Define the Animal class
class Animal {
  constructor(name, species, diet, speed) {
    this.name = name;
    this.species = species;
    this.diet = diet;
    this.speed = speed;
    this.energy = 100;
  }

  eat(food) {
    if (food === this.diet) {
      this.energy += 10;
      console.log(this.name + " ate " + food + ".");
    } else {
      console.log(this.name + " can't eat " + food + "!");
    }
  }

  move() {
    if (this.energy > 0) {
      this.energy -= this.speed;
      console.log(this.name + " moved.");
    } else {
      console.log(this.name + " is too tired to move!");
    }
  }
}

// Define the Plant class
class Plant {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.growth = 0;
  }

  grow() {
    if (this.growth < 100) {
      const growthIncrement = getRandomNumber(0, 10);
      this.growth += growthIncrement;
      console.log(this.name + " grew by " + growthIncrement.toFixed(2) + "%.");
    } else {
      console.log(this.name + " has reached maximum growth!");
    }
  }
}

// Define the Ecosystem class
class Ecosystem {
  constructor(name, temperature, humidity) {
    this.name = name;
    this.temperature = temperature;
    this.humidity = humidity;
    this.animals = [];
    this.plants = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(animal.name + " has been added to the " + this.name + " ecosystem.");
  }

  addPlant(plant) {
    this.plants.push(plant);
    console.log(plant.name + " has been added to the " + this.name + " ecosystem.");
  }

  simulate() {
    console.log("Starting simulation for the " + this.name + " ecosystem...");
    setInterval(() => {
      this.animals.forEach((animal) => {
        animal.eat(this.plants[0].type);
        animal.move();
      });

      this.plants.forEach((plant) => {
        plant.grow();
      });
    }, 2000);
  }
}

// Create instances of animals
const lion = new Animal("Lion", "Carnivore", "Meat", 15);
const elephant = new Animal("Elephant", "Herbivore", "Grass", 10);
const cheetah = new Animal("Cheetah", "Carnivore", "Meat", 20);

// Create instances of plants
const oak = new Plant("Oak Tree", "Tree");
const grass = new Plant("Grass", "Grass");

// Create an instance of an ecosystem
const savannah = new Ecosystem("Savannah", 30, 60);

// Add animals and plants to the ecosystem
savannah.addAnimal(lion);
savannah.addAnimal(elephant);
savannah.addAnimal(cheetah);
savannah.addPlant(oak);
savannah.addPlant(grass);

// Start the simulation
savannah.simulate();