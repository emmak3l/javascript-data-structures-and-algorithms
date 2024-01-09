// Problem Solving Approach Section

// Introduction to Problem Solving Lecture

// Algorithms and Problem Solving Patterns

// Objectives:
// - Define what an algorithm is
// - Devise a plan to solve algorithms
// - Compare and contrast problem solving patterns including
//   frequency counters, two pointer problems, and divide and conquer

// What is an algorithm?
// - An algorithm is a *process* or *set of steps* to accomplish a certain task.

// Why do you need to know this?
// - Almost *everything* that you do in programming involves some kind of *algorithm*
// - * It's the foundation for being a successful problem solver and developer *
// - Also... INTERVIEWS!

// How do you improve?
// 1. *Devise* a plan for solving problems
// 2. *Master* common problem solving patterns

// Problem Solving Strategies
// - Understand the Problem
// - Explore Concrete Examples
// - Break it Down
// - Solve/Simplify
// - Look Back and Refactor

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Step 1: Understand the Problem Lecture

// Note: many of these strategies are adapted from George Polya, whose book "How to Solve It"
// is a great resource for anyone who wants to become a better problem Solver

// Understand the Problem
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution of the problem?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough
//    information to solve the problem? (You may not be able to answer this question
//    until you set about solving the problem. That's okay; it's still worth
//    considering the question at this early stage.)
// 5. How should I label the important pieces of data that are a part of the problem?

// ================================================================
// Write a function which takes two numbers and returns their sum.
// ================================================================
// 1. Can I restate the problem in my own words?
//          - Write a function that adds two numbers together.
// 2. What are the inputs that go into the problem?
//          - Two numbers, but what type? ints? floats? what about string for large numbers?
// 3. What are the outputs that should come from the solution of the problem?
//          - One number, which is the sum of the two inputs, but what type? int? float? string?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough
//    information to solve the problem?
//          - Yes the output can be determined from the inputs if both values are provided.
//            But what if one of the values is missing? Do we substitute a zero, null, or undefined?
//            Will we always be adding only two numbers or will we be able to add more than two?
//            These are valid questions you would as an interviewer if asked to solve this problem
// 5. How should I label the important pieces of data that are a part of the problem?
//          - I could label function add, the inputs num1 and num2, and the output sum

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Step 2: Concrete Examples Lecture

// Explore Examples
// - Coming up with examples can help you understand the problem better
// - Examples also provide sanity checks that your eventual solution works how it should
//      - User Stories! Given an input (user action), what should the output be?
//      - Unit Tests!

// Explore Examples
// - Start with Simple Examples
// - Progress to More Complex Examples
// - Explore Examples with Empty Inputs
// - Explore Examples with Invalid Inputs

// ================================================================
// Write a function which takes in a string and
// returns counts of each character in the string.
// ================================================================

// - Start with Simple Examples
// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}
    // Are we going to include a count of chars that aren't there? (Like b:0, c: 0, etc.)

// - Progress to More Complex Examples
// charCount("my phone number is 182763"); 
    // Are we going to count or ignore spaces?
    // Are we counting numbers as well or just letters?
    // What about special characters like #, &, *, !, etc.?
// charCount("Hello hi");
    // Are we treating different cases as different characters? (e.g. is "h" different from "H"?)

// - Explore Examples with Empty Inputs
// charCount();
// charCount("");
    // Do we want to return an empty object? Null? False? Undefined? An error?

// - Explore Examples with Invalid Inputs
// charCount(1234);
// charCount(5.555);
// charCount([9,8,7,6]);
// charCount({firstName: "Emma", favColour: "Violet"});
// charCount(false);
// charCount(null);
// charCount(undefined);
    // What happens when someone passes in an input that isn't a string?
    // What if it's a number(int,float)? List? Object? Boolean? Null? Undefined?
    // Understanding these edge cases in an interview often isn't important usually,
    // but it is important to consider in the real world so you build a more robust solution.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Step 3: Break it Down Lecture

// Break it Down
// - Explicitly write out the steps you need to take.
// - This forces you to think about the code you'll write before you write it,
//   and it helps you catch any lingering conceptual issues or misunderstandings
//   before you dive in and have to worry about details (e.g. language syntax) as well.

// ================================================================
// Write a function which takes in a string and
// returns counts of each character in the string.
// ================================================================

// function charCount(str) {
    // return an object with keys that are lowercase alphanumeric characters in the string;
    // values should be the counts for those characters.

    // make object to return at end   

    // loop over string, for each character...
        // if the char is a number/letter AND is key in object, add one to count
        // if the char is a number/letter AND not in  object, add it and set value to 1
        // if the char is something else (space, period, etc.) don't do anything

    // return object at end
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Step 4: Solve or Simplify Lecture

// Solve the Problem
// If you can't...
// Solve a Simpler Problem!

// Simplify
// - Find the core difficulty in what you're trying to do
// - Temporarily ignore that difficulty
// - Write a simplified solution
// - Then incorporate that difficulty back in

// ================================================================
// Write a function which takes in a string and
// returns counts of each character in the string.
// ================================================================

// function charCount(str) {
//     // return an object with keys that are lowercase alphanumeric characters in the string;
//     // values should be the counts for those characters.

//     // make object to return at end
//     var result = {};

//     // loop over string, for each character...    
//     for(var i = 0; i < str.length; i++){
//         var char = str[i].toLowerCase()
//         // if the char is a number/letter AND is key in object, add one to count
//         if(result[char] > 0){
//             result[char] ++;
//         } 
//         // if the char is a number/letter AND not in  object, add it and set value to 1
//         else {
//             result[char] = 1;
//         }
//         // if the char is something else (space, period, etc.) don't do anything
//     }

//     // return object at end
//     return result
// }

// console.log(charCount("Hi there!"))

// The solution above is the most simple and basic implementation for counting characters in a string
// This does not implement the alphanumeric requirement yet and there are a few ways you could tackle that
// The solution below will explore different ways of completing this problem

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Step 5: Look Back and Refactor Lecture

// Look Back & Refactor
// Congrats on solving it, but you're not done!

// Refactoring Questions
// - Can you check the result?
// - Can you derive the result differently?
// - Can you understand it at a glance?
// - Can you use the result or method for some other problem?
// - Can you improve the performance of your solution?
// - Can you think of other ways to refactor?
// - How have other people solved this problem?

// ================================================================
// Write a function which takes in a string and
// returns counts of each character in the string.
// ================================================================

// Solution 1:

function charCount(str) {
    // return an object with keys that are lowercase alphanumeric characters in the string;
    // values should be the counts for those characters.

    // make object to return at end
    var result = {};

    // loop over string, for each character...    
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase()
        // use regex to check if char is a alphanumeric
        if (/[a-z0-9]/.test(char)) {
            // if the char is a number/letter AND is key in object, add one to count
            if(result[char] > 0){
                result[char] ++;
            } 
            // if the char is a number/letter AND not in object, add it and set value to 1
            else {
                result[char] = 1;
            }
            // if the char is something else (space, period, etc.) don't do anything
        }
        
    }

    // return object at end
    return result
}


// Solution 2 (first refactor):
// Replaced the for loop with a for of loop
// Reduced the if/else statement to a single conditional if statement

function charCount(str) {
    var result = {};

    for(var char of str){
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }

    return result
}


// Solution 3 (final refactor):
// Replaced the regex with a separate function that checks if a number is alphanumeric
// This is much faster performance than using regex in JavaScript
// We also moved the toLowerCase() inside the if statement so we're only lowering the necessary chars

function charCount(str) {
    var result = {};

    for(var char of str){
        if (isAlphanumeric(char)) {
            char = char.toLowerCase()
            result[char] = ++result[char] || 1;
        }
    }

    return result
}

function isAlphanumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&  // numeric (0-9)
        !(code > 67 && code < 91) &&  // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        return true;
}

console.log(charCount("Hi there!"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Recap and Interview Strategies Lecture

// Recap!
// - Understand the Problem
// - Explore Concrete Examples
// - Break it Down
// - Solve/Simplify
// - Look Back and Refactor