"use strict";
// 100 Days Of Coding Challenge!
// Using the interface in an object
const person = {
    name: "Martin",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    },
};
person.greet(); // Output: Hello, my name is Martin.
// Implementing the interface
const simpleCalculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
};
console.log(simpleCalculator.add(5, 3)); // Output: 8
console.log(simpleCalculator.subtract(10, 4)); // Output: 6
// Example usage
const user = {
    name: "Clark",
    age: 26,
    email: "clark@example.com",
    isActive: true,
};
console.log(user.isActive); // Output: true
// Example usage
const user1 = { name: "Ruby", age: 25 };
const user2 = { name: "Bob", age: 28 };
console.log(user1.name); // Output: Ruby
console.log(user2.name); // Output: Bob
const employee1 = {
    name: "John",
    employeeId: 123,
};
const employee2 = {
    name: "Stuart",
    employeeId: 321,
};
const newCar = {
    make: "Toyota",
    model: "Corolla",
};
const myCar = {
    make: "Toyota",
    model: "Camry",
};
const userId = "abc123";
const myAddress = {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
};
