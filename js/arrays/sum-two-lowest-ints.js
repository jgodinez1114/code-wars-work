/* PUrpose: create a function that returns the sum of teh 2 lowest positivenumbers 
         given an array of minimum 4 positve integers. No floats of non-positive integers will be passed.
*/

function sumTwoSmallestNumbers(numbers){
  if(numbers.length < 4){
    throw 'array contains less than 4 integers'
  } else {
      let twoSmallestSum = 0
      numbers = numbers.sort((a,b) => a-b)
      twoSmallestSum = numbers[0] + numbers[1]
      return twoSmallestSum
  }
}   // end sumgTwoSmallestNumbers()



// alternate solution
function bettersumTwoSmallestNumbers(numbers){
    numbers = numbers.sort((a,b) => a-b)
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([3,4,3,6,4,3]))
console.log(bettersumTwoSmallestNumbers([3,4,3,6,4,3]))


//sample tests
// const chai = require("chai");
// const assert = chai.assert;

// describe("Your function", function() {
//   it("should work for basic tests", function() {
//     assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
//     assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
//     assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
//     assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
//     assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
//   });
// });  