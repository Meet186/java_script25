// Class Declaration
class Person {
    // 1. Constructor: initializes object properties
    constructor(name, age) {
        this.name = name; // instance property
        this.age = age;
    }

    // 2. Instance Method: shared by all instances
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    // 3. Getter: access property like a field
    get isAdult() {
        return this.age >= 18;
    }

    // 4. Setter: set property with custom logic
    set nickname(nick) {
        this._nickname = nick.trim();
    }

    get nickname() {
        return this._nickname || "No nickname";
    }

    // 5. Static Method: called on class, not instance
    static species() {
        return "Homo sapiens";
    }

    // 6. Static Property (ES2022+)
    static planet = "Earth";
}

// 7. Inheritance: Subclass extends superclass
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age); // call parent constructor
        this.studentId = studentId;
    }

    // Method overriding
    greet() {
        super.greet(); // call parent method
        console.log(`I am a student. My ID is ${this.studentId}.`);
    }
}

// 8. Creating instances
const alice = new Person("Alice", 25);
alice.greet(); // Hello, my name is Alice.
console.log(alice.isAdult); // true
alice.nickname = "  Ally  ";
console.log(alice.nickname); // Ally

// 9. Using static methods/properties
console.log(Person.species()); // Homo sapiens
console.log(Person.planet); // Earth

// 10. Using subclass
const bob = new Student("Bob", 20, "S123");
bob.greet(); // Hello, my name is Bob. I am a student. My ID is S123.

// 11. Checking instance types
console.log(bob instanceof Student); // true
console.log(bob instanceof Person); // true

/**
 * Summary:
 * - Classes are syntactic sugar over prototypes.
 * - Support constructors, instance/static methods, getters/setters, inheritance.
 * - Use 'extends' for inheritance, 'super' to call parent methods/constructor.
 * - Static methods/properties belong to the class, not instances.
 */