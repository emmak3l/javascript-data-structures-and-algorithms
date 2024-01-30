// Insertion Sort Introduction Lecture

// Builds up the sort by gradually creating a larger left portion which is always sorted

// Visual Example
// Legend: sorted = *, pointer = ^
// [5,3,4,1,2]
//  * ^
// [3,5,4,1,2]
//  * * ^
// [3,4,5,1,2]
//  * * * ^
// [1,3,4,5,2]
//  * * * * ^
// [1,2,3,4,5]
//  * * * * *

// Insertion Sort Pseudocode
// - Start by picking the second element in the array
// - Now compare the second element with the one before it and swap if necessary
// - Continue to the next element and if it is in the incorrect order,
//   iterate through the sorted portion (i.e. the left side),
//   to place the element in the correct place

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Insertion Sort Implementation Lecture

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Insertion Sort Big O Complexity

// Similar to bubble sort and selection sort, worst case time performance is O(n^2)
// The worst case for insertion sort would be a descending ordered array
