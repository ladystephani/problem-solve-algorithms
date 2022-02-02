// write a function
// that takes in a non-empty array of distinct integers
// and
// an integer as a target sum.

// If any two num in the input array sum up to the target sum (must be two diff num)
// the function return the two num in an arr (any order is fine).
// If not, return empty arr.
// Assumption: at most one pair.

//method 1:
function twoNumberSum(array, targetSum) {
  //make sure first num stays the same, and go find the second num
  for (i = 0; i < array.length - 1; i++) {
    let firstNum = array[i];
    //if there is a second num that completes the sum and gets the target, return those in an array
    for (j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum && i !== j) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}

// summary: about ten lines of code
// a for loop accounting for first num, a second for loop for second num
// one if statement for when second num is found to achieve target sum
// time complexity: O(n^2), where n is length of arr
// space complexity: O(1) //not 2n becuz no need to store output array anywhere else.

//test case 1
//sample input
let arr = [3, 5, -4, 8, 11, 1, -1, 6];
let targetNum = 10;

console.log(twoNumberSum(arr, targetNum));
//output achieved
//[ 11, -1 ]

//test case 2
//sample input
arr = [0, 2, 3];
targetNum = 1;

console.log(twoNumberSum(arr, targetNum));
//output achieved
//[]

//module.exports = twoNumberSum;
