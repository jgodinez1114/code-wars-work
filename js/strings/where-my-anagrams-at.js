/*
 * Purpose: given an input string and an array of words, return an array of the words which are
 * anagrams to the given word
 */

function anagrams(word, words) {
  // anagramArr
  const anagramArr = [];
  // sort the input word
  const sortedWord = word.split('').sort().join('');
  // traverse the words array
  for (let i = 0; i < words.length; i += 1) {
    // sort the word element
    const sortedWordInArray = words[i].split('').sort().join('');
    // check if this word matches the input word
    if (sortedWordInArray === sortedWord) {
      // push word into anagram array if true
      anagramArr.push(words[i]);
    }
  }
  // return anagram array
  return anagramArr;
}

// alternate solution
function betterAnagrams(word, words) {
  const sortedWord = [...word].sort().join('');
  return words.filter((element) => [...element].sort().join('') === sortedWord);
}

console.log(anagrams('lessgo', ['aga', 'gossle', 'essgol']));
console.log(betterAnagrams('abba', ['aga', 'abab']));
console.log(betterAnagrams('yesss', ['sssey', 'gossle']));

// sample TDD

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
// these 2 lines work vv
// const chai = require('chai');

// const { assert } = chai;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

// these 5 lines work vvv
// describe('Solution', function () {
//   it('should test for something', function () {
//     Test.assertEquals(1 + 1, 2);
//     assert.strictEqual(1 + 1, 2);
//   });
// });
