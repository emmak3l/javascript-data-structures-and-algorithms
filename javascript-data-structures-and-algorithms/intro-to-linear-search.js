// Intro to Linear Search Lecture

// How do we search?
// Given an array, the simplest way to search for a value is to
// look at every element and check if it's the value we want

// JavaScript has search!
// There are many different search methods on arrays in JavaScript:
// - indexOf
// - includes
// - find
// - findIndex

// But how do these functions work?

// Linear Search Pseudocode
// - This function accepts an array and a value
// - Loop through the array and check if the current array element is equal to the value
// - If it is, return the index at which the element is found
// - If the value is never found, return -1

// My Solution:

function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Linear Search Solution Lecture

// Instructors Solution: (exact same except he used var instead of let for i and shortened)

function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

// This is what the built in indexOf(), includeS(), find(), findIndex() uses (linear search)

// The time complexity of linear search is O(n)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Linear Search Big O

// Best case is O(1), worst case is O(n), and average is O(n)
