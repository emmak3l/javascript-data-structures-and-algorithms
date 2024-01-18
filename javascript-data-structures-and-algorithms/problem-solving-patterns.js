// Problem Solving Patterns Section

// How do you improve?

// 1. Devise a plan for solving problems
// 2. Master common problem solving patterns

// Some Patterns:
// - Frequency Counter
// - Multiple Pointers
// - Sliding Window
// - Divide and Conquer
// - Dynamic Programming
// - Greedy Algorithms
// - Backtracking
// - * Many More! *

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Frequency Counter Pattern Lecture

// Frequency Counters
// This pattern uses object or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(n^2) operations with arrays / strings

// An Example

// ================================================================
// Write a function called *same*, which accepts two arrays.
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The requency of values must be the same.
// The order doesn't matter
// ================================================================

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must have the same frequency, e.g [1,1,4])


// A Naive Solution - Time Complexity O(n^2)

// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex == -1) {
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }


// Refactored Solution - Time Complexity O(n)

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr1){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Multiple Pointers Pattern Lecture

/* 
Creating pointers or values that correspond to an index or position and 
move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well
*/

// An Example

// =======================================================================
/*
Write a function called sumZero which accepts a sorted array of 
integers. The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined
if a pair does not exisit.
*/
// =======================================================================

/*
sumZero([-3,-2,-1,0,1,2,3]) <--- [-3,3]
sumZero([-2,0,1,3]) <--- undefined
sumZero([1,2,3]) <--- undefined
*/

// Naive Solution - Time Complexity O(n^2), Space Complexity O(1)

// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// Refactored Solution - Time Complexity O(n), Space Complexity O(1)

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Sliding Window Pattern Lecture

// Sliding Window

/*
This pattern involves creating a window which can either be an array
or number from one position to another.

Depending on a certain condition, the window either increases or closes
(and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.
*/

// An Example

// =======================================================================
/*
Write a function called maxSubarraySum which accepts an array of integers
and a number called n. The function should calculate the maximum sum of n
consecutive elements in the array.
*/
// =======================================================================

/*
maxSubarraySum([1,2,5,2,8,1,5], 2) <--- 10
maxSubarraySum([1,2,5,2,8,1,5], 4) <--- 17
maxSubarraySum([4,2,1,6], 1) <--- 6
maxSubarraySum([], 4) <--- null
*/

// Naive Solution - Time Complexity O(n^2)

// function maxSubarraySum(arr, num){
//     if (num > arr.length) {
//         return null;
//     }
//     var max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i ++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max;
// }

// Refactored Solution - Time Complexity O(n)

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Divide and Conquer Pattern Lecture

// Divide and Conquer
/*
This pattern involves dividing a data set into smaller chunks
and then repeating a proccess with a subset of data.

This pattern can tremendously decrease time complexity
*/

// An Example

// =======================================================================
/*
Given a sorted array of integers, write a function called search, that
accepts a value and returns the index where the value passed to the
function is located. If the value is not found, return -1. 
(instructor said this is technically binary search)
*/
// =======================================================================

/*
search([1,2,3,4,5,6], 4) <--- 3
search([1,2,3,4,5,6], 6) <--- 5
search([1,2,3,4,5,6], 11) <--- -1
*/

// Naive Solution - Time Complexity O(n) (Linear Search)

// function search(arr, val) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === val) {
//             return i;
//         }
//     }
//     return -1;
// }

// Refactored Solution - O(log n) (Binary Search)

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        }
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}