// write a function
// that takes in a non-empty array of integers
// that are sorted in ascending order
// and

// returns a new arr of same length with squares of original int
//also sorted, ascending.

//method 1:
// const sortAscendingSq = (smallArr) => {
//   let sqArr = [];
//   //split smallArr into elements
//   //square each one with a for loop
//   //put all elements into sqArr
//   return sqArr;
// };
const sortAscendingSq = (smallArr) => {
  const sqArr = new Array(smallArr.length).fill(0);

  for (let idx = 0; idx < smallArr.length; idx++) {
    const value = smallArr[idx];
    sqArr[idx] = value * value;
  }

  sqArr.sort((a, b) => a - b); // placing a callback that would check - if a is smaller than b, then place a in front
  return sqArr;
};

// summary: use newly learned embedded JS tools
//-- new Array()
//.fill()
//familiarize with .sort() more
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// for loop
// can use idx to name instead of i
//there is no embedded JS 'square a number' function, so need to use a variable to store the element taken from smallArr.

// O(nlogn) time | O(n) space
// elaborate on time complexity:
// n comes from for loop
//nlogn comes from .sort(), like any sorting algorithm
// n+nlogn
//is then simplified to nlogn

//test case 1
//sample input
let arr = [1, 2, 3, 5, 6, 8, 9];

console.log(sortAscendingSq(arr));
//output
// [1, 4, 9, 25, 36, 64, 81]

//test case 2
//sample input
arr = [-7, -5, -4, 3, 6, 8, 9];

console.log(sortAscendingSq(arr));
//output achieved
//[9,16,25,36,49,64,81]
