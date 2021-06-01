/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
spinWords("This is a test") => "This is a test"
spinWords("This is another test") => "This is rehtona test"
*/

// function spinWords(string) {
//     // we need to return an empty string if no string is passed in
//     if (!string) {
//         return ''
//     }
//     // we need the words isolated
//     let wordsOnly = string.split(' ')
//     // we need a new, reversed string 
//     let revString = []
//     // check each word for a length of 5 or greater
//     for (a of wordsOnly) {
//         // 5 or greater check to reverse the word
//         if (a.length > 4) {
//             // declare space for temp work, and word reversal
//             let tmp = []
//             let revWord = []
//             // isolate each letter of the word
//             let letters = a.split('')
//             // push letters in order
//             for (letter of letters) {
//                 tmp.push(letter)
//             }
//             // pop words in reverse order LIFO
//             while (tmp.length > 0) {
//                 // add letters to the reversed string being built
//                 revWord += tmp.pop()
//             }
//             // push this word in to the final string
//             revString.push(revWord)
//         } else {
//             revString.push(a)
//         }
//     }
//     // return the engineered string
//     return revString.join(' ')

// }   // end spinWords()

// alternate solution
function spinWords(str) {
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = words[i].split('').reverse().join('')
        }
    }
    return words.join(' ')
}


// sample tests
// const chai = require("chai");
// const assert = chai.assert;

// describe("Spinning words", () => {
//     it("Sample tests", () => {
//         assert.strictEqual(spinWords("Welcome"), "emocleW");
//         assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
//         assert.strictEqual(spinWords("This is a test"), "This is a test");
//         assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
//         assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
//         assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
//         assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
//     });
// });

console.log(spinWords('Welcome'));
console.log(spinWords('Just kidding there is still one more'));
console.log(spinWords('Seriously this is the last one'));
console.log(spinWords('This is a test'));
