// 100 Days Of Coding Challenge!

/* Day-70 Task:
Learn about TypeScript interfaces by using the following guide and coding along with the examples provided in it:

Interface in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-70/TS-Interface/README.md */

//-----------------------------------------------------------------------------------------------------------------

/* 1. Interface in TypeScript
An interface in TypeScript defines the structure of an object.
It specifies the properties and their types that an object should have. */

// Example:

// Defining an interface
interface Person {
  name: string;
  age: number;
  greet(): void; // Method with no return value
}

// Using the interface in an object
const person: Person = {
  name: "Martin",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet(); // Output: Hello, my name is Martin.

//------------------------------------------------------------------------------------------------------------------

/* 2. Interface Method and Parameters
Interfaces can also define methods and their parameters. */

// Example:

// Defining an interface with methods
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

// Implementing the interface
const simpleCalculator: Calculator = {
  add(a: number, b: number): number {
    return a + b;
  },
  subtract(a: number, b: number): number {
    return a - b;
  },
};

console.log(simpleCalculator.add(5, 3)); // Output: 8
console.log(simpleCalculator.subtract(10, 4)); // Output: 6

//------------------------------------------------------------------------------------------------------------------

/* 3. Reopen the Interface and Use Cases
TypeScript allows you to reopen an interface and add new properties or methods.
This is useful for extending existing interfaces: */

interface User {
  name: string;
  age: number;
}

// Reopening the interface to add new properties
interface User {
  email: string;
  isActive: boolean;
}

// Example usage
const user: User = {
  name: "Clark",
  age: 26,
  email: "clark@example.com",
  isActive: true,
};

console.log(user.isActive); // Output: true

//------------------------------------------------------------------------------------------------------------------

/* 4. Built-in Interface
TypeScript includes several built-in interfaces for common objects and DOM elements.
For example, the HTMLImageElement interface represents an HTML <img> element: */

// const img: HTMLImageElement = document.createElement('img');
// img.src = "path/to/image.jpg"; //
// img.alt = "An example image";

// Adding the image to the document
// document.body.appendChild(img);

//------------------------------------------------------------------------------------------------------------------

// 5. HTMLImageElement

/* The HTMLImageElement interface represents an HTML <img> element and provides properties and methods to manipulate image elements.
Here are some key properties and methods along with an example: */

// Properties

/* alt: A string that reflects the alt HTML attribute, providing alternate text for the image.

src: A string representing the URL of the image.

height: An integer reflecting the height of the image in CSS pixels.

width: An integer reflecting the width of the image in CSS pixels.

complete: A boolean indicating whether the image has finished loading.

naturalHeight: The intrinsic height of the image in CSS pixels.

naturalWidth: The intrinsic width of the image in CSS pixels. */

// Methods

/* decode(): Returns a promise that resolves when the image is decoded.

addEventListener(): Adds an event listener to the image element.

removeEventListener(): Removes an event listener from the image element. */

// Example
// Here’s a simple example demonstrating how to create and manipulate an HTMLImageElement:

// Create a new image element
// const img = new Image();
// img.src = "https://example.com/image.jpg";
// img.alt = "Example Image";
// img.width = 300;
// img.height = 200;

// Append the image to the body
// document.body.appendChild(img);

// Check if the image has loaded
// img.addEventListener("load", () => {
//  console.log("Image loaded successfully");
//  console.log(`Natural dimensions: ${img.naturalWidth}x${img.naturalHeight}`);
// });

// Handle image loading error
// img.addEventListener("error", () => {
//  console.log("Failed to load image");
// });

// In this example:

/* We create a new image element using the Image() constructor.

Set the src, alt, width, and height properties.

Append the image to the document body.

Add event listeners to handle the load and error events. */

//-----------------------------------------------------------------------------------------------------------------------

/* 5. Interface vs. Type Aliases
Both interfaces and type aliases can be used to define the shape of an object, but they have some differences.
Interfaces are generally preferred for defining object shapes,
while type aliases are used for more complex types like unions: */

// Using an interface
interface UserInterface {
  name: string;
  age: number;
}

// Using a type alias
type UserType = {
  name: string;
  age: number;
};

// Example usage
const user1: UserInterface = { name: "Ruby", age: 25 };
const user2: UserType = { name: "Bob", age: 28 };

console.log(user1.name); // Output: Ruby
console.log(user2.name); // Output: Bob

//------------------------------------------------------------------------------------------------------------------

//  Comparison between interfaces and type aliases:

// 1. Declaration Syntax

// Interface:

interface User1 {
  id: number;
  name: string;
  email: string;
}

// Type Alias:

type user2 = {
  id: number;
  name: string;
  email: string;
};

/* Both interfaces and type aliases can be used to define the shape of an object.
The syntax is slightly different, but they serve similar purposes. */

//----------------------------------------------------------------------------------------------------------------------

// 2. Extending and Implementing

// Interface:

interface PersonA {
  name: string;
}

interface EmployeeA extends PersonA {
  employeeId: number;
}

const employee1: Employee = {
  name: "John",
  employeeId: 123,
};

// Type Alias:

type PersonB = {
  name: string;
};

type Employee = PersonB & {
  employeeId: number;
};

const employee2: Employee = {
  name: "Stuart",
  employeeId: 321,
};

// Interfaces use the extends keyword to inherit properties, while type aliases use intersection types (&).

//----------------------------------------------------------------------------------------------------------------------

// 3. Compatibility

/* Interfaces and type aliases are largely interchangeable, but there are some differences in how they handle certain scenarios.
For example, interfaces can be merged, while type aliases cannot. */

// Interface Merging:

interface VehicleA {
  make: string;
}

interface VehicleA {
  model: string;
}

const newCar: VehicleA = {
  make: "Toyota",
  model: "Corolla",
};

// Type aliases do not support merging:

type VehicleB = {
  make: string;
};

// This will cause an error
type Vehicle = {
  model: string;
};

//-----------------------------------------------------------------------------------------------------------------------

/* 4. Extensibility
Interfaces are open-ended and can be extended or merged, making them more flexible for extending existing types. */

// Extending Interfaces:

interface Car {
  make: string;
}

interface Car {
  model: string;
}

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
};

// Type aliases are closed and cannot be reopened or extended in the same way.

//----------------------------------------------------------------------------------------------------------------------------

/* 5. Readability and Style
Interfaces are generally preferred for defining the shape of objects, especially when you expect them to be extended or implemented by classes.
Type aliases are more versatile and can be used for other types, such as unions, intersections, and primitives. */

// Union Types with Type Aliases:

type ID = number | string;

const userId: ID = "abc123";

// Interface for Object Shapes:

interface Address {
  street: string;
  city: string;
  country: string;
}

const myAddress: Address = {
  street: "123 Main St",
  city: "Anytown",
  country: "USA",
};
