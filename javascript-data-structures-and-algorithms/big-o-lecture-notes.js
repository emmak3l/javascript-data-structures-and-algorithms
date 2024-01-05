// Timing Code Lecture

// Example
// Suppose we want to write a function that calculates the sum
// of all numbers from 1 up to and including some number, n.

// Version 1
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
// ^ Time Elapsed: 1.1933009590506554 seconds.

// Version 2
// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
// ^ Time Elapsed: 0.00003720694780349732 seconds.

// So which version is better? Version 1 or Version 2?

// What does better mean?
//  - Faster?
//  - Less memory-intensive?
//  - More readable?

// The first two points are generally the most important, we're focusing on speed to start

// Let's use a timer to measure the speed of each function to determine which is faster
// Based on the results of the timer, the Version 2 function is better than the Version 1 function as it's significantly faster
// We're done! ...Right? 

// The Problem with Time
//  - Different machines will record different times
//  - The SAME machine will record different times!
//  - For fast algorithms, speed measurements may not be precise enough

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Counting Operations Lecture

// If not time, then what?
// Rather than counting seconds which are so variable...
// Let's count the number of simple operations the computer has to perform!

// Counting Operations
// For the Version 2 function, there are 3 simple operations happening to n:
// 1 multiplication, 1 addition, and 1 division
// No matter how big or small n is, there will always be 3 simple operations

// For the Version 1 function, there are 5n + 2 operations!
// function addUpTo(n) {
//     let total = 0; // <- 1 assignment
//     for (let i = 1; i <= n; i++) { // <- (1 assignment; n comparisions; n additions and n assignments)
//         total += i; // <- n additions and n assignments
//     }
//     return total;
// }

// Counting is hard!
// Depending on what we count, the number of operations can be as low as 2n or as high as 5N + 2 for Version 1
// Regardless of the exact number, number of operations grows roughly proportionally with n
// As n grows, the number of operations grows roughly in proportion with n

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Official Intro to Big O Lecture

// Big O Notation is a way to formalize fuzzy counting
// It allows us to talk formally about how the runtime of an algorithm grows as the input grows
// It's the relationship between the input of a function as it grows and how that changes the runtime
// We don't care about the details just the large trends

// Big O Definition
// We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do
// is eventually less than a constant times f(n), as n increases

// - f(n) could be linear (f(n) = n)
// - f(n) could be quadratic (f(n) = n^2)
// - f(n) could be constant (f(n) = 1)
// - f(n) could be something entirely different!

// When we talk about Big O we're talking about the worst case scenario in terms of runtime (the upper bound)

// For our Version 2 function, there are always 3 operations, so we can describe it as O(1)
// The runtimes will always vary slightly but remember we care about the general trend not individual runtimes

// For our Version 1 function, the number of operations is (eventually) bounded by a multiple of n (say, 10n)
// We would simplify this down and describe it as O(n) (there are rules for this, but we care about the order of magnitude)

// Another Example that is O(n)
// function countUpAndDown(n) {
//     console.log("Going up!");
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
//     console.log("At the top!\nGoing down...");
//     for (let j = n - 1; j >= 0; j--) {
//         console.log(j)
//     }
//     console.log("Back down. Bye!");
// }

// OMG MOAR EXAMPLES
// This is different, it's NOT O(n) it's actually O(n^2)
// It has nested for loops, which makes it an O(n) operation inside of another O(n) operation
// function printAllPairs(n) {
//     for (var i = 0; i < n; i++) {
//         for (var j = 0; j < n; j++) {
//             console.log(i,j);
//         }
//     }
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Simplifying Big O Expressions Lecture

// When determining the time complexity of an algorithm,
// there are some helpful rules of thumbs for big O expressions.
// These rules of thumb are consequences of the definition of big O notation.


// Constants Don't Matter

// O(2n)     --->    O(n)
// O(500)    --->    O(1)
// O(13n^2)  --->    O(n^2)


// Smaller Terms Don't Matter

// O(n + 10)        --->    O(n)
// O(1000n + 50)    --->    O(n)
// O(n^2 5n + 8)    --->    O(n^2)


// Big O Shorthands
// - Analyzing complexity with big O can get complicated
// - There are several rules of thumb that can help
// - These rules won't ALWAYS work, but they are helpful starting points

// 1. Arithmetic operations are constant (adding, subtracting, dividing, multiplying)
// 2. Variable assignment is constant (x = 1000, x = 20000)
// 3. Accessing elements in an array (by index) or object (by key) is constant
// 4. In a loop, the complexity is the length of the loop
//    times the complexity of whatever happens inside the loop


// A Couple More Examples

function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

logAtLeast5(1) // 1 2 3 4 5

// What is the big O of the logAtLeast5 function? It's O(n)

function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

logAtMost5(10) // 1 2 3 4 5

// What is the big O of the logAtMost5 function? It's O(1)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Space Complexity Lecture

// So far, we've been focusing on *time complexity*:
// how we can analyze the runtime of an algorithm as the size of the inputs increases?

// We can also use big O notation to analyze *space complexity*:
// how much additional memory do we need to allocate in order to run the code in our algorithm?


// What about the inputs?

// Sometimes you'll hear the term *auxiliary space complexity* 
// to refer to space required by the algorithm, not including space taken up by the inputs

// This is what we'll be refering to. Unless otherwise noted,
// when we talk about space complexity technically we'll be talking about auxiliary space complexity


// Space Complexity in JS (Rules of Thumb)

// - Most primitives (booleans, numbers, undefined, null) are constant space
// - Strings require O(n) space (where n is the string length)
// - Reference types are generally O(n), where n is the length (for arrays)
//   or the number of keys (for objects)


// An Example

function sum(arr) {
    let total = 0; // <- one number
    for (let i = 0; i < arr.length; i++) {
        //    ^ one number
        total += arr[i];
    }
    return total
}

// Since there are two primitive values (which are constant space), the funtion sum has O(1) space


// Another Example

function double(arr) {
    let newArr = []; // <- one reference type
    for (let i = 0; i < arr.length; i++) {
        //    ^ one number
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

// Since there is one reference type and one number, the function double has O(n) space


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Logs and Section Recap Lecture


// Logarithms

// - We've encountered some of the most common complexities: O(1), O(n), O(n^2)
// - Sometimes big O expressions involve more complex mathematical expressions
// - One that appears more often than you might like is the logarithm!


// Wait, what's a log again?

// Logarithms are the inverse of Exponents

// log2(8) = 3    --->    2^3 = 8
// ^ read as 
// (log base 2 of 8 equals 3)

// log2(value) = exponent    --->    2^exponent = value

// logs aren't always base 2, you can have base 3, 4 etc.

// For what we're doing we only care about the big picture, so we'll omit the 2
// log === log2


// Wut.

// This isn't a math course, so here's a rule of thumb

// The logarithm of a number roughly measures the number of times you can divide the number by 2
// * before you get a value that's less than or equal to one. *


// Logarithm Examples

// 8 / 2 = 4 / 2 = 2 / 2 = 1
// We divided 3 times before getting to exactly 1, so log(8) = 3

// 25 / 2 = 12.5 / 2 = 6.25 / 2 = 3.125 / 2 = 1.5625 / 2 = 0.78125
// We divided somewhere between 4-5 times before getting a number below 1, so log(25) =~ 4.64


// Logarithm Complexity

// Logarithm time complexity is great! O(log n)
// It's the next best thing after O(1) and it's way faster than O(n)


// Who Cares?

// - Certain searching algorithms have logarithmic time complexity.
// - Efficient sorting algorithms involve logarithms.
// - Recursion sometimes involves logarithmic space complexity.


// Recap

// - To analyze the performance of an algorithm, we use Big O Notation
// - Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
// - Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
// - The time or space complexity (as measured by Big O Notation) depends only on the algorithm,
//   not the hardware used to run the algorithm
// - Big O Notation is everywhere, so get lots of practice!