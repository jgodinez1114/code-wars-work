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