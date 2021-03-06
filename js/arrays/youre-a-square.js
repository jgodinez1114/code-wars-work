/* given an integer, determine if it's a square number:
   NOTE: a square number or perfect square is an integer
   that is the square of an integer, in other words, it is
   the product of some integer with itself
*/

function isSquare(n) {
    let sqRoot = n ** (1 / 2);
    if (sqRoot ** 2 === n) {
        return true;
    } else {
        return false;
    }
}

// sample tests 
Test.describe("isSquare", function () {
    Test.it("should work for some examples", function () {
        Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be  square numbers");
        Test.assertEquals(isSquare(0), true, "0 is a square number (0 * 0)");
        Test.assertEquals(isSquare(3), false, "3 is not a square number");
        Test.assertEquals(isSquare(4), true, "4 is a square number (2 * 2)");
        Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
        Test.assertEquals(isSquare(26), false, "26 is not a square number");
    });
});

// alternate sol
// function isSquare(n){
//     return Math.sqrt(n) % 1 === 0;
// }