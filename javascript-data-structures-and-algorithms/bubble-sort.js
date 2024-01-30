// Bubble Sort Overview Lecture:

// BubbleSort
// - A sorting algorithm where the largest values bubble up to the top!

// Website resource: https://visualgo.net/en/sorting


// BubbleSort visualization:
// - comparing two values and making the largest bubbble to the top til the list is sorted

// [ 5, 3, 4, 1, 2 ]
//    \/
// [ 3, 5, 4, 1, 2 ]
//       \/
// [ 3, 4, 5, 1, 2 ]
//          \/
// [ 3, 4, 1, 5, 2 ]
//             \/
// [ 3, 4, 1, 2, 5 ]
//    \/
// [ 3, 4, 1, 2, 5 ]
//       \/
// [ 3, 1, 4, 2, 5 ]
//          \/
// [ 3, 1, 2, 4, 5 ]
//    \/
// [ 1, 3, 2, 4, 5 ]
//       \/
// [ 1, 2, 3, 4, 5 ]


// Many sorting algorithms involve some type of swapping functionality
// (e.g. swapping two numbers to put them in order)

// ES5 Syntax
// function swap(arr, idx1, idx2){
//     var temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }

// ES2015 Syntax
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

// BubbleSort Pseudocode
// - Start looping with a variable called i at the end of the array towards the beginning
// - Start an inner loop with a variable called j from the beginning until i-1
// - If arr[j] is greater than arr[j+1], swap those two values!

// function bubbleSort(arr){
//     for(var i = arr.length; i > 0; i--){
//         for(var j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([5, 3, 4, 1, 2]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// BubbleSort Implementation Lecture

// Instructors Naive Solution

// function bubbleSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([37, 45, 29, 8]))


// Instructors Optimized Solution

// function bubbleSort(arr){
//     for(var i = arr.length; i > 0; i--){
//         for(var j = 0; j < i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([37, 45, 29, 8]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// BubbleSort Optimization Lecture

// Extra Optimization
// This implementation will stop us from making unnecessary iterations on nearly sorted arrays
// If there were no swaps during a loop then we know the array is sorted and we can break out

function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr
}

console.log(bubbleSort([8,1,2,3,4,5,6,7]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// BubbleSort Big O Complexity Lecture

// In general, it's O(n^2) (worst case)
// However, if the data is nearly sorted or already sorted, then it's closer to O(n) (best case)
// (technically our solution would be O(2n) since we looped through 1 extra time to check for noSwaps
// but it 'rounds down' or simplifies to O(n))