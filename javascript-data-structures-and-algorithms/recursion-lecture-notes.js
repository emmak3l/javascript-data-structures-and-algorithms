// Recursion Section

// Storytime: Martin and the Dragon Lecture

// Once upon a time there was a boy named Martin training with wizards and a dragon called The Dragon
// One day the wizard gives Martin a task. He tells Martin he needs him to go talk to the dragon

// He's given a list of numbers and needs to tell the wizard if any of the numbers are odd
// Martin goes to the dragon and asks him if any of these numbers are odd:
// (3142 5798 6550 5914)

// The dragon isn't in a good mood so he says:
// "Sorry, I'll only tell you if the first number in that list is odd"

// Martin is angry because he needs to know if any of the numbers in the list are odd!
// But the dragon is firm and will only tell Martin if the first number in the list is odd

// So Martin thinks for a bit, then asks the dragon about the first number in the list:
// (*3142* 5798 6550 5914)
// And the dragon says "That's not odd"

// Then Martin asks about the first number in this other different list:
// (*5798* 6550 5914)
// And the dragon says "That's not odd"

// Martin then asks about the first number in another list:
// (*6550* 5914)
// And the dragon says "That's not odd"

// Then Martin asks about the first number in this list:
// (*5914*)
// And the dragon says "That's not odd"

// Finally Martin asks about the first number in this list:
// ()
// And the dragon gets upset and says:
// "That's an empty list you moron! There isn't a number in there!"

// Then Martin exclaims with glee: "AHA! So all the numbers are even in that list!"
// And the dragon says: "I never said that!"

// So then Martin gets a stick and writes in the dirt
// (*3142* 5798 6550 5914)    I gave you this list and you said the first number was not odd
// (*5798* 6550 5914)         Then I gave you this list and you said the first number was not odd
// (*6550* 5914)              Then I gave you this list and you said the first number was not odd
// (*5914*)                   Then I gave you this list and you said the first number was not odd
// ()                         Finally I gave you this list and you got mad because it was empty

// So Martin says:
// "I can conclude that since there are no odds in any of the lists, there are no odds in the first list"
// And the dragon says condescendingly "Congratulations boy, you have discovered recursion"

// And Martin is confused, he says "Wait, you knew about this the whole time?"
// And the dragon says "This was a test"


// Objectives
// - Define what recursion is and how it can be used
// - Understand the two essential components of a recursive function
// - Visualize the call stack to better debug and understand recursive functions
// - Use helper method recursion and pure recursion to solve more difficult problems

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Why Use Recursion? Lecture

// What is Recursion?
// Recursion is a process (a function in our case) that calls itself

// Why do you need to know this?
// It's EVERYWHERE
//      - JSON.parse / JSON.stringify
//      - document.getElementById and DOM traversal algorithms
//      - Object traversal
//      - We will see it with more complex data structures
//      - It's sometimes a cleaner alternative to iteration

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// The Call Stack Lecture

// But first... let's talk about functions
// - In almost all program languages, there is a built in data structure that manages what
//   happens when functions are invoked
// - It's named *the call stack*

// The call stack
// - It's a *stack* data structure - we'll talk about that later
// - Any time a function is invoked it is placed (pushed) on top of the call stack
// - When JavaScript sees the *return* keyword or when the function ends,
//   the compiler will remove (*pop*)


// Step through the following functions to see how they get pushed and popped off the call stack
// by setting a breakpoint on the wakeUp() function and using the debugger tool

// function takeShower(){
//     return "Showering!";
// }

// function eatBreakfast(){
//     let meal = cookFood();
//     return `Eating ${meal}`;
// }

// function cookFood(){
//     let items = ["Oatmeal", "Eggs", "Protein Shake"];
//     return items[Math.floor(Math.random()*items.length)];
// }

// function wakeUp(){
//     takeShower();
//     eatBreakfast();
//     console.log("Okay ready to go to work!")
// }

// wakeUp()


// Why do I care?
// - You're used to functions being pushed on the call stack and popped off when they're done
// - When we write recursice fucntions, we keep pushing new functions onto the call stack!
//                                                      ^(the same function)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Our First Recursive Function Lecture

// How recursive functions work
// - Invoke the *same* function with a different input until you reach your base case!

// Base Case
// The condition when the recursion ends.
// *This is the most important concept to understand*

// Our list of numbers Martin was checking with the dragon earlier
// (*3142* 5798 6550 5914)
// (*5798* 6550 5914)
// (*6550* 5914)
// (*5914*)
// () <--------- This is the base case

// Two essential parts of a recursive function!
// - Base Case
// - Different Input

// Our first recursive function

function countDown(num){
    if (num <= 0){ // <--- base case
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(3)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Our Second Recursive Function Lecture

function sumRange(num) {
    if(num === 1) return 1; // <--- base case
    return num + sumRange(num-1); // <--- different input
}

sumRange(3)
// return 3 + sumRange(2)                   <-- waiting on stack to see what sumRange(2) is
//                 return 2 + sumRange(1)   <-- waiting on stack to see what sumRange(1) is
//                                 return 1 <-- reached the base case

// Once the base case is reached, the additions get simplified

// return 6                                 <-- Finally the stack has been cleared and we're left with our final answer
//        return 3 + 3                      <-- then it's sum is added to this call now that we know that sumRange(2) = 3
//                   return 2 + 1           <-- this executes first after the base case has been reached, sumRange(1) = 1

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Writing Factorial Iteratively Lecture

// 4! (factorial) = 4 * 3 * 2 * 1

function iterativeFactorial(num){
    let total = 1;
    for (let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

iterativeFactorial(3) // 6
iterativeFactorial(4) // 24

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Writing Factorial Recursively Lecture

function recursiveFactorial(num){
    if(num == 1) return 1;
    return num * recursiveFactorial(num-1);
}

recursiveFactorial(5) // 120

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Common Recursion Pitfalls Lecture

// Where things go wrong
// - No base case (or base case is wrong)
// - Forgetting to return or returning the wrong thing!
// - Stack overflow!

// This function returns the wrong thing which causes a Maximum call stack size exceeded error (stack overflow)
// What's happening is that the function is multiplying 2 * iterativeFactorial(2) forever until the error occurs
// function recursiveFactorial(num){
//     if(num == 1) return 1;
//     return num * recursiveFactorial(num);
// }
// iterativeFactorial(2)

// This functions base case is wrong, because it's not returning and instead writing to the console
// Because there is no return function num will keep decreasing indefinitely,
// until the Maximum call stack size exceeded error (stack overflow) occurs
// function recursiveFactorial(num){
//     if(num == 1) console.log(1);
//     return num * recursiveFactorial(num-1);
// }
// iterativeFactorial(2)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Helper Method Recursion Lecture

// This code doesn't do anything it's just a pattern
// function outer(input){
//     var outerScopedVariable = [];

//     function helper(helperInput){
//         //modify the outerScopedVariable
//         helper(helperInput--);
//     }

//     helper(input);

//     return outerScopedVariable;
// }

// A Real Example:

function helperCollectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

console.log(helperCollectOddValues([1,2,3,4,5,6,7,8,9])) // [1,3,5,7,9]


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Pure Recursion Lecture

function pureCollectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(pureCollectOddValues(arr.slice(1)));
    return newArr;
}

console.log(pureCollectOddValues([1,2,3,4,5])) // [1,3,5]

// Pure Recursion Tips
// - for arrays, use methods like *slice*, the *spread operator*, and *concat*
//   that make compies of arrays so you do not mutate them
// - Remember that strings are immutable in JavaScript so you will need to use
//   methods like *slice*, *substr*, or *substring* to make copies of strings
// - To make copies of objects use *Object.assign*, or the *spread operator*