// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is neg. return 0(for languages that do have them)

function solution(number) {
    let toSumArr = []; // create array to store numbers to sum  
    for (let i = 1; i < number; i++) {  // iterate until number limit
        // check divisibility by 3&5
        if (i % 3 == 0 && i % 5 == 0) {
            toSumArr.push(i);
        } else if (i % 3 == 0) {
            toSumArr.push(i);
        } else if (i % 5 == 0) {
            toSumArr.push(i);
        }
    }
    return toSumArr.reduce((a, b) => a + b, 0);  //let totalSum = toSumArr.reduce(( a, b) => a + b , 0);
}

// sample tests
function test(n, expected) {
    let actual = solution(n)
    Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
}

Test.describe("basic tests", function () {
    test(10, 23)
})