/* count the amount of characters in a given string
    example: given 'aba' return {'a':2, 'b':1}
*/

function count(string) {
    let counts = {};
    let stringArr = string.split('');

    for (i in stringArr) {
        //check if element is a falsy or not found
        if (!counts[stringArr[i]]) {
            counts[stringArr[i]] = 0;
        }
        // increment value to the next object
        ++counts[stringArr[i]];
    }
    return counts;
}   // end count()

count('this is a test string');

//  alternate solution
// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }

// function count (string) {
//     var result = {};

//     for(let i = 0; i < string.length; i++) {
//       if(result.hasOwnProperty(string[i])){
//         result[string[i]] += 1;
//       } else {
//         result[string[i]] = 1;
//       }
//     }

//     return result;
//   }