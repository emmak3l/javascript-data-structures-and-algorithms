// Introduction to Merge Sort

// Intro to the "Crazier" Sorts Lecture

// Intermediate Sorting Algorithms
// - Don't be scared!
// - These are much harder to implement so don't feel bad if you can't figure out
//   how to implement these with the pseudocode instructions the first time through
// - This section is meant to walk you through the code so you understand how it works
//   and be able to explain the algorithms, not being able to re-write it from scratch

// Objectives
// - Understand the limitations of the sorting algorithms we've learned so far
// - Implement merge sort
// - Implement quick sort
// - Implement radix sort

// Why Learn This?
// - The sorting algorithms we've learned so far don't scale well
// - Try out bubble sort on an array of 100000 elements, it will take quite some time!

// Faster Sorts
// - There is a family of sorting algorithms that can improve time complexity from
//   O(^2) to O(n log n)
// - There's a tradeoff between efficiency and simplicity
// - The move efficient algoritms are much less simple, and generally take longer to understand
// - Let's dive in!

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Merge Sort: Introduction Lecture

// Merge Sort
// - It's a combination of two things - merging and sorting!
//   (could be three things if you include splitting up data)
// - Exploits the fact that arrays of 0 or 1 element are always sorted
// - Works by decomposing an array into smaller arrays of 0 or 1 elements,
//   then building up a newly sorted array

// How does it work?

//         [8,3,5,4,7,6,1,2]
//           /            \
//      [8,3,5,4]      [7,6,1,2]
//       /      \       /      \
//    [8,3]   [5,4]   [7,6]   [1,2]
//    /   \   /   \   /   \   /   \
//   [8] [3] [5] [4] [7] [6] [1] [2]  <-- Split all the elements into single array chunks
//     \ /     \ /     \ /     \ /
//    [3,8]   [4,5]   [6,7]   [1,2]   <-- Merge the elements by comparing the numbers and putting the smallest first
//      \ \  / /       \ \   / /
//      [3,4,5,8]      [1,2,6,7]      <-- Repeat the process by comparing the numbers and placing them in order
//         \ \ \ \     / / / / 
//         [1,2,3,4,5,6,7,8]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Merging Arrays: Intro Lecture

// Merging Arrays
// - In order to implement merge sorts, it's useful to first implement a function responsible
//   for merging two sorted arrays
// - Given two arrays which are sorted, this helper function should create a new array which is
//   also sorted, and consists of all of the elements in the two input arrays
// - This function should run in O(n + m) time and O(n + m) space and *should not* modify
//   the parameters passed to it

// Merging Arrays Pseudocode
// - Create an empty array called results, take a look at the smallest values in each input array
// - Two pointers i = 0 and j = 0 and instructor recommends while loops for this
// - While there are still values we haven't looked at... (i and j haven't reached the end of their arrays)
//      - We're going to take the value of the first item in the first array, and compare it
//        to the first item in the second array
//      - If the value in the first array is smaller than the value in the second array,
//        push the value in the first array into our results array and move on to the
//        next value in the first array
//      - If the value in the first array is larger than the value in the second array,
//        push the value in the second array into our results array and move on to the
//        next value in the second array
//      - Once we exhaust one array, push in all remaining values from the other array

// Visual Example
// Legend: ^i ^j = pointers, <-> = compare, r = result array
// [1,10,50] [2,14,99,100]
//  ^i  <->   ^j
// r =[1]
// [1,10,50] [2,14,99,100]
//     ^i <-> ^j
// r =[1,2]
// [1,10,50] [2,14,99,100]
//     ^i  <->  ^j
// r =[1,2,10]
// [1,10,50] [2,14,99,100]
//       ^i <-> ^j
// r =[1,2,10,14]
// [1,10,50] [2,14,99,100]
//       ^i   <->  ^j
// r =[1,2,10,14,50]
// [1,10,50] [2,14,99,100]
//                  ^j  Now that i has reach the end of it's array, 
//                      we add the remaining values in the j array to our result
// r =[1,2,10,14,50,99,100]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Merging Arrays: Implementation

function merge(arr1, arr2){
    var result = [];
    var i = 0;
    var j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else { // This will capture if the values are the same and if arr1[i] > arr2[j]
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(merge([1,10,50],[2,14,99,100]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Writing Merge Sort: Part 1 Lecture

// mergeSort Pseudocode
// - Break up the array into halves until you have arrays that are empty or have one element
//      - Instructor recommends using slice to cut the array's up
//      - First from 0 to the mid-point, then from the mid-point to the end of the array
//      - Call mergeSort again recursively to break each half into another half again until
//        you reach the base case of 1 element per array or empty arrays (arr.length <= 1)
// - Once you have smaller sorted arrays, merge those arrays with other sorted arrays (using
//   our merge fucntion) until you are back at the full length of the array
// - Once the array has been merged back together, return the merged (and sorted!) array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Writing Merge Sort: Part 2 Lecture

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

console.log(mergeSort([10,24,76,73]))

// Visual Walkthrough of what's happening:
// (follow the number prefixes to understand the order of operations)

//                            1. mergeSort([10,24,76,73])
//                             16. merge([10,24],[73,76])
//                             17. return [10,24,73,76]
// 
//       2. mergeSort([10,24])                         9. mergeSort([76,73])
//       7. merge([10],[24])                          14. merge([76],[73])
//       8. return [10,24]                            15. return [73,76]
// 
// 3. mergeSort([10])     5. mergeSort([24])           10. mergeSort([76])    12. mergeSort([73])
// 4. return [10]         6. return [24]               11. return [76]        13. return [73]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// MergeSort Big O Complexity

/*
   --------------------------------------------------------------------------
   | Time Complexity | Time Complexity | Time Complexity | Space Complexity |
   |     (Best)      |    (Average)    |     (Worst)     |                  |
   --------------------------------------------------------------------------
   |    O(n log n)   |    O(n log n)   |    O(n log n)   |       O(n)       |
   |                 |                 |                 |                  |
   --------------------------------------------------------------------------
*/

// O(log n) decompositions     +     O(n) comparisons per decomposition    =  O(n log n)
// (the number of times we           
//  split the array grows
//  at the rate of log n)

// The best time complexity we can get for a data agnostic sort is O(n log n)
// O(n log n) is worse than O(n) and O(log n), but much better than O(n^2)