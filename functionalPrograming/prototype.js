
// 1. Every function in JS has a prototype property (except arrow functions)
function Person(name) {
    this.name = name;
}

// 2. Adding methods to the prototype
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// 3. Creating instances
const alice = new Person('Alice');
const bob = new Person('Bob');

// 4. Both instances share the same prototype methods
alice.sayHello(); // Hello, my name is Alice
bob.sayHello();   // Hello, my name is Bob

// 5. Prototype chain demonstration
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(alice)); // true

// 6. Inheritance using prototypes
function Employee(name, position) {
    Person.call(this, name); // Call Person constructor
    this.position = position;
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add method to Employee prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.position}`);
};

const charlie = new Employee('Charlie', 'Developer');
charlie.sayHello(); // Inherited from Person.prototype
charlie.work();     // Defined on Employee.prototype

// 7. Prototype chain visualization
function printPrototypeChain(obj) {
    let proto = Object.getPrototypeOf(obj);
    while (proto) {
        console.log(proto);
        proto = Object.getPrototypeOf(proto);
    }
}

console.log('Prototype chain for charlie:');
printPrototypeChain(charlie);

/*
Summary:
- Functions have a prototype property.
- Objects created with constructors inherit from that prototype.
- Prototypes form a chain (prototype chain).
- Inheritance can be set up by assigning a new prototype object.
*/