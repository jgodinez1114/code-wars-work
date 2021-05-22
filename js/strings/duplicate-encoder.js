/*
  Purpose: encode a given string.
  convert a string into a new string where each character int the new string is "(" if that character 
  a[[ears only once in the original string or ")" if that character appears more than once in the original 
  string . ignore capitalization.

  ex: "din" => "((("
*/

function duplicateEncode(word){ 
  // ignore capitalization
  word = word.toLowerCase()
  // work with word as an array
  let letters = word.split('')
  // create empty object to record character coutns
  let charCounts = {}
  // create empty string to compose output string
  let encodedStr = ''
  //traverse the input string
  for ( i in letters ){
    // if letter does not appears in counts obj
    if(!charCounts[letters[i]]){
      // add this character to the counts object with a 0 value
      charCounts[letters[i]] = 0
    }
    // currentValue++
    ++charCounts[letters[i]]
  }
  console.log(charCounts)
  // traverse the letters and check counts
  for (a of letters){
    // if the value of the this letter in charCounts is more than 1
    if (charCounts[a] > 1){
      // add a ")" to the output string
      encodedStr+=')' 
    } else {
      // add a "(" to thr output string
      encodedStr+='('
    }
  }
  // return the output final string
  return encodedStr;
}  // end duplicateEncode()  

// alternate solution:
function duplicateEncodeBetter(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
// Explanation:

// .toLowerCase() -- Makes all the string lower case
// .split('') -- makes an array with each char of the string

// .map( function (a, i, w) {
// return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
// })
// -- the map function takes every element and applies that function where:
// a - Current value(each element of the array at a time)
// i - The array index of the current element
// w - The array object the current element belongs to
// So taking the w(which is the array), w.indexOf(a) takes the element(a) and checks the index. The lastIndexOf(a) check's the last index of an element ex: if there are more duplicate elements in an array, this will give the last of them.
// So basically if the first index of an element is the same with the last then we know it's unique and we will replace it with '('. If not, it's not unique because the first index it's not equal with the last index( we know there are more elements then) so we replace with ')'.
// the way it's written the if statement it's the "conditional (ternary) operator": ex: return condition ? true : false; =>>> return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
// .join(''); - this simply joins the array in a string back.


// sample tests
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))((");

  });
});


console.log(duplicateEncode('a;slkdjf'))
console.log(duplicateEncode(' '))
console.log(duplicateEncode('yyysss'))