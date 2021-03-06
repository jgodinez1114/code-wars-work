// given a string in camelCase, return a string with the striung broken up
// into separate words

function solution(string) {
  const splitArray = string.split('');
  for (let i = 0; i < splitArray.length; i += 1) {
    // check if each element is uppercase char
    if (splitArray[i] === splitArray[i].toUpperCase()) {
      splitArray[i] = ` ${splitArray[i]}`;
    }
  }
  // join all chars in splitArray
  return splitArray.join('');
}

// alternate soltion
// function solution(string) {
//     return (string.replace(/([A-Z])/g, ' $1'));
// }
// // refer to : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n

// sample tests
// Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

console.log(solution('thisIsCamelCase'));
