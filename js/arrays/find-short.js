// given a string of words, return the lengfth ofg the shortest word(s)

// function findShortest(s) {
//     // split the string of strings at (" ")
//     let wordsArr = s.split(" ");
//     let shortest = wordsArr[0].length;
//     // traverse the array
//     for (a of wordsArr) {
//         if (a.length < shortest) {
//             shortest = a.length;
//         }
//     }
//     return shortest;
// }

function findShortest(s) {
    return s
        .split(' ')
        .map(a => a.length)
        .reduce((a, b) => Math.min(a, b))
}

// sample tests
// Test.describe("Example tests", _ => {
//     Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// });

console.log(findShortest("bitcoin take over the world maybe who knows perhaps"));
console.log(findShortest("lorem ipsum this is a super test string as a great testssss."));

// alternate solution

