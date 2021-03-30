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

// alternate solution
// function XO(str) {
//     let x = str.match(/x/gi); // g modifier: global. All matches; i modifier: insensitive 
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
/* } NOTE: g modifier: global. All matches (don't return on first match)

        i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
 */

console.log(XO('this is xo a test'));
console.log(XO('this is xo a testx'));
