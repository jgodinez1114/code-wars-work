/*
 * Purpose: split the given string into pairs of 2 chars.
 * if the strings contains an odd number of chars, add an '_'
 * at the end  of the original string
 * ex: given 'abc' --> ['ab', 'c,_]
 */

function solution(str) {
    // declare a new array
    let pairsArr = []
    // check the string length to add '_' if necessary
    if (str.length % 2 !== 0) {
        str = str.concat('_')
    }
    // traverse the string 
    for (var i = 0; i < str.length; i += 2) {
        // add the chars as pairs
        pairsArr.push(str.slice(i, i + 2))
    }
    // return the resultingArr 
    return pairsArr
}

console.log(solution('jfj'))
console.log(solution('sslkdjf'))
console.log(solution('kdkdkdkflskdjf'))

// sample tests
// const { assert } = require('chai');

// describe("Split Strings", () => {
//     it("Basic tests", () => {
//         assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//         assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//         assert.deepEqual(solution(""), []);
//     });
// });