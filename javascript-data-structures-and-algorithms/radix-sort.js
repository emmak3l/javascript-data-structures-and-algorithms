// Radix Sort Introduction Lecture

// Comparison Sorts
// Average Time Complexity
// - Bubble Sort: O(n^2)
// - Insertion Sort: O(n^2)
// - Selection Sort: O(n^2)
// - Quick Sort: O(n log n)
// - Merge Sort: O(n log n)

// The best case time complexity we can get for comparison sorts is O(n log n)

// Can we do better?
// Yes, but not by making comparisons...

// Radix Sort
// - Radix sort is a speacial sorting algorithm that works on lists of numbers
// - It is an integer sort algorithm that takes advantage of the special properties of numbers
// - It never makes comparisons between elements!
// - It exploits the fact that information about the size of a number is encoded in the
//   number of digits
// - More digits means a bigger number!

// How does it work?

// [ 1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29 ]

// - First we start by looking at the first digit on the right side of the numbers and
//   group them into buckets based on that number

// ---------------------------------------------------------------------------------
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |  86   |       |       |       |
// |       |       |       |       |       |       | 4386  | 9637  |       |       |
// |       |       |       |       |       |       | 3556  | 8157  |       |       |
// |       |       |  902  |  593  |   4   |       | 1556  |   7   |  408  |  29   |
// ---------------------------------------------------------------------------------
// |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |

// [ 902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29 ]

// - Next, we repeat the process and look at the next digit to the left
// - If the number is a single digit, it goes in the 0 bucket

// ---------------------------------------------------------------------------------
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |       |       |       |       |
// |  408  |       |       |       |       |       |       |       |       |       |
// |   7   |       |       |       |       | 8157  |       |       |       |       |
// |   4   |       |       |       |       | 3556  |       |       |  86   |       |
// |  902  |       |   29  | 9637  |       | 1556  |       |       | 4386  |  593  |
// ---------------------------------------------------------------------------------
// |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |

// [ 902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593 ]

// - Next, we repeat the process again and look at the next digit to the left
// - If the number is double digits, it goes in the 0 bucket

// ---------------------------------------------------------------------------------
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |       |       |       |       |
// |       |       |       |       |       |       |       |       |       |       |
// |  86   |       |       |       |       |       |       |       |       |       |
// |  29   |       |       |       |       |  593  |       |       |       |       |
// |   7   |       |       |       |       | 3556  |       |       |       |       |
// |   4   | 8157  |       | 4386  |  408  | 1556  | 9637  |       |       |  902  |
// ---------------------------------------------------------------------------------
// |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |

// [ 4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902 ]

// - Finally we repeat the process one more time and look at the next digit to the left
// - The number of time we have group depends on the number of digits in the largest number
// - Since the largest number in this array has four digits, we split/group 4 times
// - Now if the number is triple digits, it goes in the 0 bucket

// ---------------------------------------------------------------------------------
// |       |       |       |       |       |       |       |       |       |       |
// |  902  |       |       |       |       |       |       |       |       |       |
// |  593  |       |       |       |       |       |       |       |       |       |
// |  408  |       |       |       |       |       |       |       |       |       |
// |  86   |       |       |       |       |       |       |       |       |       |
// |  29   |       |       |       |       |       |       |       |       |       |
// |   7   |       |       |       |       |       |       |       |       |       |
// |   4   | 1556  |       | 3556  | 4386  |       |       |       | 8157  | 9637  |
// ---------------------------------------------------------------------------------
// |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |

// [ 4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637 ]

// Now the array is sorted in ascending order, we're done!

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Radix Sort Helper Lecture

// Radix Sort Helpers
// - In order to implement radix sort, it's helpful to build a few helper functions first:
//      - getDigit(num, place) 
//              - returns the digit in *num* at the given *place* value
//      - digitCount(num) 
//              - returns the number of digits in *num*
//      - mostDigits(nums) 
//              - given an array of numbers, returns the number of digits in 
//                the largest numbers in the list                         

// getDigit(12345, 0) <-- 5
// getDigit(12345, 1) <-- 4
// getDigit(12345, 2) <-- 3
// getDigit(12345, 3) <-- 2
// getDigit(12345, 4) <-- 1
// getDigit(12345, 5) <-- 0

function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// digitCount(1); <-- 1
// digitCount(25); <-- 2
// digitCount(314); <-- 3

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits([1234, 56, 7]); <-- 4
// mostDigits([1, 1, 11111, 1]); <-- 5
// mostDigits([12, 34, 56, 78]); <-- 2

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Radix Sort Pseudocode Lecture

// Radix Sort Pseudocode
// - Define a function that accepts a list of numbers
// - Figure out how many digits the largest number has
// - Loop from k = 0 up to this largest number of digits
// - For each iteration of the loop:
//      - Create buckets (empty arrays inside another array) for each digit (0 to 9)
//      - Place each number in the corresponding bucket based on its kth digit
// - Replace our existing array with values in our buckets, starting with 0 and going up to 9
// - return list at the end!

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Radix Sort Implementation Lecture

function radixSort(nums){
    let maxDigitsCount = mostDigits(nums);

    for(let k = 0; k < maxDigitsCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets); // ... is the spread operator
    }
    return nums;
}

radixSort([9852, 345, 23, 2345, 12, 5467])

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Radix Sort Big O Complexity Lecture

/*
   --------------------------------------------------------------------------
   | Time Complexity | Time Complexity | Time Complexity | Space Complexity |
   |     (Best)      |    (Average)    |     (Worst)     |                  |
   --------------------------------------------------------------------------
   |      O(nk)      |      O(nk)      |      O(nk)      |     O(n + k)     |
   |                 |                 |                 |                  |
   --------------------------------------------------------------------------
*/

// n is the length of the array
// k is the number of digits(average)(length of the largest digit in the array)

// - If you're dealing with all unique randomly distrubuted data, then k becomes log n,
//   so the time complexity would become O(n log n), just like the comparison sorts
//      - This is because of the way that computers store numbers in memory
