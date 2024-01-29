// Introduction to Sorting Algoritms Lecture

// Elementary Sorting Algorithms

// What is sorting?
// Sorting is the process of rearranging the items in a collection (e.g. an array)
// so that the items are in some kind of order

// Examples
// - Sorting numbers from smallest to largest
// - Sorting names alphabetically
// - Sorting movies based on release year
// - Sorting movies based on revenue

// Why do we need to learn this?
// - Sorting is an incredibly common task, so it's good to know how it works
// - There are many different ways to sort things, and different techniques have
//   their own advantages and disadvantages
// - Classic interview problem, critical thinking challenge

// Website resource: https://www.toptal.com/developers/sorting-algorithms

// Objectives
// - Implement bubble sort
// - Implement selection sort
// - Implement insertion sort
// - Understand why it is important to learn these simpler sorting algorithms

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Built-In JavaScript Sorting Lecture

// JavaScript has a sort method, but it doesn't always work the way you expect...

// ["Steele", "Colt", "Data Structures", "Algorithms"].sort();
// output: (it's sorted alphabetically)
// ["Algorithms", "Colt", "Data Structures", "Steele"]

// [6, 4, 15, 10].sort();
// output:
// [10, 15, 4, 6] 

// huh??? but why tho?
// - The default sort order is according to string Unicode code points

// Telling JavaScript how to sort
// - The built-in sort method accepts an optional *comparator* function
// - You can use this comparator function to tell JavaScript how you want it to sort
// - The comparator looks at pairs of elements (a and b), and 
//   determines their sort order based on the return value
//      - If it returns a negative number, a should come before b
//      - If it returns a positive number, a should come after b
//      - If it returns 0, a and b are the same as far as the sort is concerned

// Examples:

function numberCompareAscend(num1, num2){
    return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompareAscend);
// output:
// [4, 6, 10, 15]


function numberCompareDescend(num1, num2){
    return num2 - num1;
}

[6, 4, 15, 10].sort(numberCompareDescend);
// output:
// [15, 10, 6, 4]


function compareByLenAscend(str1, str2){
    return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLenAscend);
// output:
// ["Colt", "Steele", "Algorithms", "Data Structures"]

function compareByLenDescend(str1, str2){
    return str2.length - str1.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLenDescend);
// output:
// ["Data Structures", "Algorithms", "Steele", "Colt"]