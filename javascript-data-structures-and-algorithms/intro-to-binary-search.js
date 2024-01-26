// Intro to Binary Search Lecture

// Binary Search
// - Binary search is a much faster form of search
// - Rather than eliminating one element at a time, you can
//   eliminate half of the remaining elements at a time
// - The caveat is that it only works on sorted arrays

// Divide and Conquer Pattern

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Binary Search Pseudocode Lecture

// Binary Search Pseudocode
// - This function accepts a sorted array and a value
// - Create a start pointer at the start of the array,
//   and a end pointer at the end of the array
// - While the start pointer comes before the end pointer:
//      - Create a pointer in the middle
//      - If you find the value you want, return the index
//      - If the value is too small, move the start pointer up
//      - If the value is too large, move the end pointer down
// - If you never find the value, return -1

// My Solution:

function binarySearch(arr, val){
    let start = 0
    let end = arr.length - 1

    while(start <= end){
        let middle = Math.floor((start + end) / 2);

        if(arr[middle] < val){
            start = middle + 1;
        }
        else if(arr[middle] > val){
            end = middle - 1;
        }
        else{
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 16))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Binary Search Solution Lecture

// Instructors Solution:

// Longer Version
function binarySearch(arr, elem){
    var start = 0
    var end = arr.length - 1
    var middle = Math.floor((start + end) / 2);

    while(middle !== elem && start <= end){
        if(elem < arr[middle]){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Shorter Version
function binarySearch(arr, elem){
    var start = 0
    var end = arr.length - 1
    var middle = Math.floor((start + end) / 2);

    while(middle !== elem && start <= end){
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Binary Search Big O

// Best case is O(1), worst and average case is O(log n)

// Suppose we're searching for 13 in this array (^ is mid point):

// [2,4,5,9,11,14,15,19,21,25,28,30,50,52,60,63]
//                    ^
// [2,4,5,9,11,14,15]
//        ^
// [11,14,15]]
//      ^
// [11]
//   ^

// Nope not here!
// 16 elements = 4 "steps" (log2 16 = 4) <--- 2^4 = 16

// To add another "step", we need to double the number of elements

// Let's search for 32

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
//                                       ^
// [17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
//                        ^
// [25,26,27,28,29,30,32,35]
//            ^
// [29,30,32,35]
//      ^
// [32,35]
//   ^

// 32 elements = 5 "steps" (worst case) (log2 32 = 5) <--- 2^5 = 32