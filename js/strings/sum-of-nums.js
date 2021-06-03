/*
 * Purpose: given 2 integers, a,b, return the sum of all the integers between a and b
 * Ex: given 0,-1 --> -1
 * PREP
 * Params: 2 integers, positive or negative
 * Return: the sum of all ints between a and b
 * Example: given -2, 2 --> -2 + -1 + 0 + 1 + 2 = 0
 * Pseudocode: 1. create an array from the lower bound to the upper bound
 *             2. find the sum of the numbers found in the array
 *             3. return the sum
 */

function getSum(a, b) {
  // decalre, init sum = 0
  let mySum = 0;
  // traverse through ints between a and b (lowest bound to upper bound)
  for (let i = Math.min(a, b); i <= Math.max(a, b); i += 1) {
    mySum += i;
  }
  // return the sum
  return mySum;
}

console.log(getSum(-6, 7));
console.log(getSum(-6, 6));
console.log(getSum(-1, 6));

// sample tests
// describe('Basic Tests:', function () {
//   Test.assertEquals(getSum(0, -1), -1);
//   Test.assertEquals(getSum(0, 1), 1);
// });
