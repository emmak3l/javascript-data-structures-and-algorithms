// countUniqueValues

// =======================================================================
/*
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array. There can be negative numbers
in the array, but it will always be sorted.
*/
// =======================================================================

// My Solution

function countUniqueValues(arr){
    if(arr.length == 0){
        return 0;
    }
    let i = 0;
    let j = 1;
    while(j < arr.length){
        if(arr[i] == arr[j]){
            j++;
        } else {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1,2,3,4,4,5,5]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Instructor's Solution

function countUniqueValues(arr){
    if(arr.length == 0){
        return 0;
    }
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
