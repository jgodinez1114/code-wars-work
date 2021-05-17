/*
 *Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(a, b) {
    let newArr = [];
    for (i of a) {
        if (!b.includes(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}   // end arrayDiff()

// alternate solution
// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
// }

console.log(arrayDiff([2, 6, 7, 8, 7,], [3, 5, 6, 4, 7]));
console.log(arrayDiff([2, 6, 7, 8, 1,0], [3, 5, 6, 4, 7]));


// smaple tests
// Test.describe("Sample tests", function () {
//     Test.it("Should pass Sample tests", function () {
//         Test.assertDeepEquals(arrayDiff([], [4, 5]), [], "a was [], b was [4,5]");
//         Test.assertDeepEquals(arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]");
//         Test.assertDeepEquals(arrayDiff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []");
//         Test.assertDeepEquals(arrayDiff([1, 2, 3], [1, 2]), [3], "a was [1,2,3], b was [1,2]")
//     });
// });