/* 
Filename: complexCode.js
Content: Complex Code Example
*/

// Example of a complex code with multiple functions and object-oriented programming concepts

// Class for creating a Person object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  sayAge() {
    console.log(`I am ${this.age} years old`);
  }
}

// Class for creating a Student object, inherits from Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  sayMajor() {
    console.log(`I am majoring in ${this.major}`);
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to validate an email address using regex
function validateEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

// Sample usage of the above functions and classes
const john = new Person("John Smith", 30);
john.sayHello();
john.sayAge();

const alice = new Student("Alice Johnson", 21, "Computer Science");
alice.sayHello();
alice.sayAge();
alice.sayMajor();

const num = 5;
const fact = factorial(num);
console.log(`Factorial of ${num} is ${fact}`);

const randomNum = getRandomNumber(1, 10);
console.log(`Random number between 1 and 10: ${randomNum}`);

const email = "test@example.com";
const isValidEmail = validateEmail(email);
console.log(`Is ${email} a valid email address? ${isValidEmail}`);

// ... Rest of the code, adding more complexity and functionality