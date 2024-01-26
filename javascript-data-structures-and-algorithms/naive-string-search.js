// Naive String Search Lecture

// - Suppose you want to count the number of times a smaller string appears in a long string
// - A straightforward approach involves checking pairs of characters individually

// Pseudocode
// - Loop over the long string
// - Loop over the short string
// - If the characters don't match, keep going
// - If you complete the inner loop and find a match, increment the count of matches
// - Return the count

function stringSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]){
                break;
            }
            if(j === short.length - 1){
                count++;
            }
        }
    }
    return count;
}

console.log(stringSearch("wowomgzomg", "omg"))