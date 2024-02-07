// Data Structures Section

// Which Data Structure is The Best? Lecture

// We're going to cover a ton of structures:
// - Binary Search Trees
// - Singly Linked Lists
// - Double Linked Lists
// - Stacks
// - Queues
// - Undirected Unweighted Graphs
// - Binary Heaps
// - Priority Queues
// - Directed Graphs
// - Hash Tables
// - and MORE!

// What do they do?
// Data structures are collections of values, they contain the relationships between those values,
// and the functions or operations that can be applied to the data

// Why so many??
// - Different data structures excel at different things.
// - Some are highly specialized, while others (like arrays) are more generally used.

// Why Care?
// - The more time you spend as a developer, the more likely you'll need to use one 
//   of these data structures
// - You've already worked with many of them unknowingly!
// - And of course... INTERVIEWS

// There is no one "BEST" Data Structure
// - They all excel in different situations... Otherwise why bother learning them all?
// - Working with map/location data?
//      - Use a graph!
// - Need an ordered list with fast inserts/removals at the beginning and end?
//      - Use a linked list!
// - Web scraping nested HTML?
//      - Use a tree!
// - Need to write a scheduler?
//      - Use a binary heap!

// There's a ton of content to take in here...
// Don't get overwhelmed trying to master it all at once.
// Take breaks between sections, at least a day!

// Now we need to learn a bit of ES2015 syntax that we'll use along the way.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ES2015 Class Syntax Overview Lecture

// Objectives
// - Explain what a class is
// - Understand how JavaScript implements the *idea* of classes
// - Define terms like abstraction, encapsulation, and polymorphism
// - Use ES2015 classes to implement data structures

// What is a Class?
// - A blueprint for creating objects with pre-defined properties and methods

// Does Javascript have classes? eh not really...
// - JavaScript classes are primarily syntactical sugar over Javascripts existing
//   prototype-based inheritance. The class syntax *does not* introduce a new
//   object-oriented inheritance model to JavaScript
// - Classes are in fact "special functions", and just as you can define function expressions
//   and function declarations, the class syntax has two components: class expressions
//   and class declarations

// Why do we need to learn this?
// - We're going to implement *data structures* as *classes*!

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Data Stuctures: The Class Keyword Lecture

// The Syntax
// - The method to create new objects *must* be called constructor
// - The class keyword creates a constant, so you can not redefine it.
//   Watch out for the syntax as well!

// class Student {
//     constructor(firstName, lastName, year){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//     }
// }

// Creating objects from classes
// - We use the *new* keyword

// let firstStudent = new Student("Colt", "Steele");
// let secondStucent = new Student("Blue", "Steele", 4);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Data Stuctures: Adding Instance Methods Lecture

// Instance Methods

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3){
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length;
    }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

firstStudent.fullName() // "Your full name is Colt Steele"

firstStudent.tardies // 0
firstStudent.markLate() // "Colt Steele has been late 1 times"
firstStudent.tardies // 1
firstStudent.markLate() // "Colt Steele has been late 2 times"
firstStudent.tardies // 2
firstStudent.markLate() // "YOU ARE EXPELLED!!!!"
firstStudent.tardies // 3

secondStudent.scores // []
secondStudent.addScore(92) // [92]
secondStudent.addScore(87) // [92, 87]
secondStudent.scores // [92, 87]
secondStudent.calculateAverage() // 89.5

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Data Stuctures: Adding Class Methods Lecture

// Class Methods
// - The static keyword defines a static method for a class
// - Static methods are called without instantiating their class and *cannot* be called 
//   through a class instance
// - Static methods are often used to create utility functions for an application

// class Student {
//     constructor(firstName, lastName, year){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//         this.tardies = 0;
//         this.scores = [];
//     }
//     fullName(){
//         return `Your full name is ${this.firstName} ${this.lastName}`;
//     }
//     markLate(){
//         this.tardies += 1;
//         if(this.tardies >= 3){
//             return "YOU ARE EXPELLED!!!!"
//         }
//         return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
//     }
//     addScore(score){
//         this.scores.push(score);
//         return this.scores;
//     }
//     calculateAverage(){
//         let sum = this.scores.reduce(function(a,b){return a+b})
//         return sum/this.scores.length;
//     }
//     static enrollStudents(){
//         return "ENROLLING STUDENTS!"
//     }
// }

// let firstStudent = new Student("Colt", "Steele", 1);
// let secondStudent = new Student("Blue", "Steele", 2);

// Student.enrollStudents() // "ENROLLING STUDENTS!"


// A better example of class methods

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10,10);

Point.distance(p1, p2); // 7.0710678118654755

// How we'll be using classes
// - We will be using the *constructor* and *instance methods* quite a bit!
// - We will almost *never* be using static methods

// class DataStructure(){
//     constructor(){
//         // what default properties should it have 
//     }
//     someInstanceMethod(){
//         // what should each object created from this class be able to do?
//     }
// }

// One gotcha with 'this'
// - Inside all of our *instance* methods and *constructor*, the keyword 'this' refers to the
//   object created from that class (also known as an *instance*)

// Recap
// - Classes are blueprints that when created make objects known as *instances*
// - Classes are created (instantiated) with the *new* keyword
// - The *constructor* function is a special function that gets run when the class is instantiated
// - Instance methods can be added to classes similar to methods in objects
// - Class methods can be added using the *static* keyword