// Selection Sort Introduction Lecture

// Selection Sort
// Similar to bubble sort, but instead of first placing large values into sorted position,
// it places small values into sorted position

// Visual Example
// Legend: ^ ^ = compare , * = minimum value, \swap/ = swap
// [5,3,4,1,2]
//  ^ ^
// [5,3,4,1,2]
//    *
//    ^ ^
// [5,3,4,1,2]
//    *
//    ^   ^
// [5,3,4,1,2]
//        *
//        ^ ^
// [5,3,4,1,2]
//        *
//  \swap/
// [1,3,4,5,2]

// Selection Sort Pseudocode
// - Store the first element as the smallest value you've seen so far
// - Compare this item to the next item in the array until you find a smaller number
// - If a smaller number is found, designate that smaller number to be the new minimum 
//   and continue until the end of the array
// - If the minimum is not the value (index) you initially began with, swap the two values
// - Repeat this with the next element until the array is sorted

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Selection Sort Implementation Lecture

function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var min = i;

        for(j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== lowest){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Selection Sort Big O Complexity Lecture

// Not very efficient, time complexity O(n^2)

// The only situation where selction sort is better than bubble sort 
// is if you want to minimize the number of swaps that you're making
// (both suck for time complexity tbh)