/* given a string, check the amount of x's and o's
 * the method must be case insensitive
 * return true if the amounts match
 */

function XO(str) {
    strArr = str.toLowerCase().split("");
    let xCount = 0;
    let oCount = 0;
    for (a of strArr) {
        if (a === 'x') {
            xCount++;
        } else if (a === 'o') {
            oCount++;
        }
    }
    return true ? oCount === xCount : false;
}   // end XO()

console.log(XO('this is xo a test'));
console.log(XO('this is xo a testx'));
