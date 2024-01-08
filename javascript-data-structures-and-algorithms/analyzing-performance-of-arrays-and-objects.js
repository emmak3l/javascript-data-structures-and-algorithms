// Section Introduction Lecture

// Built-in Data Structures 
// Through the lens of Big O

// Now that we've covered Big O...
// Let's spend a couple minutes analyzing the things we do all the time in JS:
// working with Arrays, Objects, and built-in methods

// Objectives
// - Understand how objects and arrays work, through the lens of Big O
// - Explain why adding elements to the beginning of an array is costly
// - Compare and contrast the runtime for arrays and objects, as well as built-in methods

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// The Big O of Objects Lecture

// Objects (unordered, key value pairs)

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favouriteNumbers: [1,2,3,4]
}

// When to use objects
// - When you don't need order
// - When you need fast access / insertion and removal

// Big O of Objects:
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(1)

// When you don't need any ordering, objects are an excellent choice!

// Big O of Object Methods:
// Object.keys - O(n)        ---> Object.keys(instructor) ["firstName", "isInstructor", "favouriteNumbers"]
// Object.values - O(n)      ---> Object.values(instructor) ["Kelly", true, [1,2,3,4]]
// Object.entries - O(n)     ---> Object.entries(instructor) [["firstName", "Kelly], ["isInstructor", true], ["favouriteNumbers", [1,2,3,4]]
// hasOwnProperty - O(1)     ---> Object.hasOwnProperty("firstName") true

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// When are Arrays Slow? Lecture

// Arrays (Ordered Lists)

let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"]

// When to Use Arrays:
// - When you need order
// - When you need fast access / insertion and removal (sort of...)

// Big O of Arrays:
// Insertion - It depends... 
//      - If you insert the new item to the end it's O(1)
//      - If you insert the new item to the beginning it's O(n)
// Removal - It depends...
//      - If you remove the item from the end it's O(1) (push and pop)
//      - If you remove the item from the beginning it's O(N) (shift and unshift)
// Searching - O(n)
// Access - O(1) ---> names[2] just as fast as billion[100000000]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Big O of Array Methods Lecture

// push - O(1)
// pop - O(1)
// shift - O(n)
// unshift - O(n)
// concat - O(n) (merges two or more arrays into a new array)
// slice - O(n) (copy of part or all of an array)
// splice - O(n) (remove and/or add elements)
// sort - O(n * log n) (larger than O(n))
// forEach/map/filter/reduce/etc. - O(n)