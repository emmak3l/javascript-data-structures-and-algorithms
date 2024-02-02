// Quick Sort

// Introduction to Quick Sort Lecture

// Quick Sort
// - Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// - Works by selecting one element (called the 'pivot') and finding the index where 
//   the pivot should end up in the sorted array
//       - We move all of the numbers that are less than the pivot to the left of the pivot
//         and all of the numbers that are greater than the pivot to the right of the pivot
// - Once the pivot is positioned appropriately, quick sort can be applied on 
//   either side of the pivot

// How does it work?
// Legend: ^ = pivot, * = sorted, correct index

// [5,2,1,8,4,7,6,3]
//  ^
// [3,2,1,4,5,7,6,8]
//  ^       *
// [1,2,3,4,5,7,6,8]
//  ^   *   *
// [1,2,3,4,5,7,6,8]
//  * * *   *
// [1,2,3,4,5,7,6,8]
//  * * * * * ^
// [1,2,3,4,5,6,7,8]
//  * * * * * * * *

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Pivot Helper Introduction Lecture

// Pivot Helper
// - In order to implement merge sort, it's useful to first implement a function responsible
//   for arranging elements in an array on either side of a pivot
// - Given an array, this helper function should designate an element as the pivot
// - It should rearrange elements in the array so that all values less than the pivot are moved
//   to the left of the pivot, and all values greater than the pivot are moved to the right 
// - The order of elements on either side of the pivot doesn't matter!
// - The helper should do this *in place*, that is, it should not create a new array
// - When complete, the helper should return the index of the pivot

// Picking a pivot
// - The runtime of quick sort depends in part on how one selects the pivot
// - Ideally, the pivot should be chosen so that it's roughly the median value in the
//   data set you're sorting
// - For simplicity, we'll always choose the pivot to be the first element
//   (We'll talk about the consequences of this later)

// Pivot Helper Example

// let arr = [5,2,1,8,4,7,6,3]

// pivot(arr); // 4

// arr;
// Any one of these is an acceptable mutation:
// [2,1,4,3,5,8,7,6]
// [1,4,3,2,5,7,6,8]
// [3,2,1,4,5,7,6,8]
// [4,1,2,3,5,6,8,7]
// There are other acceptable mutations too!

// Pivot Pseudocode
// - It will help to accept three arguements: an array, a start index, and an end index
//   (these can default to 0 and the array length minus 1, respectively)
// - Grab the pivot point from the start of the array
// - Store the current pivot index in a variable (this will keep track of where the pivot
//   should end up)
// - Loop through the array from the start until the end
//      - If the pivot is greater than the current element, increment the pivot index variable
//        and then swap the current element with the element at the pivot index
// - Swap the starting element (i.e. the pivot) with the pivot index
// - Return the pivot index

function pivot(arr, start = 0, end = arr.length - 1){
    function swap(array, i, j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var pivotIndex = start;
    
    for(let i = start + 1 ; i <= end; i++){
        if(pivot > arr[i]){
            pivotIndex++;
            swap(arr,pivotIndex,i)
        }
    }

    swap(arr,start,pivotIndex);
    return pivotIndex;

}

console.log(pivot([8,4,2,1,5,7,6,3]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Quick Sort Implementation Lecture

// QuickSort Pseudocode
// - Call the pivot helper on the array
// - When the helper returns to you the updated pivot index, recursively call the pivot helper
//   on the subarray to the left of that index, and the subarray to the right of that index
// - Your base case occurs when you consider a subarray with less than 2 elements

// Quick Sort Implementation

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr,left,pivotIndex-1);
    // right
    quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

console.log(quickSort([4,6,9,1,2,5,3]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Quick Sort Big O Complexity

/*
   --------------------------------------------------------------------------
   | Time Complexity | Time Complexity | Time Complexity | Space Complexity |
   |     (Best)      |    (Average)    |     (Worst)     |                  |
   --------------------------------------------------------------------------
   |    O(n log n)   |    O(n log n)   |      O(n^2)     |     O(log n)     |
   |                 |                 |                 |                  |
   --------------------------------------------------------------------------
*/

// Just like merge sort, the best and average time complexity is O(n log n):

// O(log n) decompositions     +     O(n) comparisons per decomposition    =  O(n log n)
// (the number of times we           
//  split the array grows
//  at the rate of log n)

// - The way we implemented our quick sort is to always take the first element as the pivot point
// - This is horrible if the data is already sorted, which would give us the worst case
//   time complexity of O(n^2)
//      - We'd have to make O(n) decompositions (each decomposition would only give us one number in the partition)
//      - And O(n) comparisons per decomposition, so O(n) * O(n) = O(n^2), quadratic time
// - Even if we try to avoid this by picking the mid point as the pivot point, if we accidentally
//   pick the minimum value or the maximum value in the array we will experience the worst case time complexity