/*
 * for this task, write a function which changes all but the last 4 chars of a given string
 * into '#'
 * ex, given "2348484" --> '###8484'
 */

function maskify(cc) {
    if (cc.length < 4) {
        return cc
    }
    let encodedStr = '' // declare empty string to add '#s'
    let toEncode = cc.slice(0, -4)  // slice out all but last 4 chars
    let lastFour = cc.slice(cc.length - 4) // the last 4 chars are lastFour

    for (let i = 0; i < toEncode.length; i++) {
        encodedStr += '#'   // build the encoded string
    }
    return encodedStr.concat(lastFour)
}   // end maskify()

function betterMaskify(cc) {
    // get the slice of all but last 4 chars, replace any digit with '#', concat last 4 of original
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}

console.log(maskify('a;lskjdf89323'));
console.log(maskify('23'));
console.log(maskify('02938433'));
console.log(betterMaskify('a;lskjdf89323'));
console.log(betterMaskify('23'));
console.log(betterMaskify('02938433'));


// sample tests
// describe("maskify", function () {
//     it("should work for some examples", function () {
//         Test.assertEquals(maskify('4556364607935616'), '############5616');
//         Test.assertEquals(maskify('1'), '1');
//         Test.assertEquals(maskify('11111'), '#1111');
//     });
// });