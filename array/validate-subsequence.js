// given two non-empty arrays of integers, write a function
// that determines whether the second arr is a subsequence

//Note: set of num
//not necessarily adjacent
//in same order as appeared in the arr.
//Assumption: can be a single num array or the arr itself.

//method 1:
//my attempt
// const validSubsequence = (arr, seq) => {
//   //for loop for arr
//   for (let i = 0; i < arr.length; i++) {
//     let numInArr = arr[i];
//     for (let j = 0; j < seq.length; j++) {
//       let numInSeq = seq[j];
//       if ((numInSeq[j] === numInArr[i])) { //remember to use ===
//         //go to the next i
//         //if all j found before arr looped thru, return true
//       } else {
//         return false;
//       }
//     }
//   }
//   //may need to use a while loop for seq to be checked

//   return false;
// };

const validSubsequence = (arr, seq) => {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < arr.length && seqIdx < seq.length) {
    if (arr[arrIdx] === seq[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }
  return seqIdx === seq.length; //when seqIdx from 0 has been added till after the last one, it would be greater than the last index, which makes it equal to seq.length
};
// summary: one while loop solves the problem
// time complexity: O(n)
// space complexity: O(1)

//test case 1

//sample input
let array = [5, 1, 22, 25, 6, -1, 8, 10];
let checkSeq = [1, 6, -1, 10];

console.log(validSubsequence(array, checkSeq));
//output
//true
