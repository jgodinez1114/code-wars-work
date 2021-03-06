// detect whether a passed in string is a pangram

function isPangram(string) {
    // convert str to lowercase
    string = string.toLowerCase()

    // define the alphabet
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split("")

    // return true if every elemennt in string still contains alphabet letter
    return alpha.every(x => string.includes(x));
}

var string = "The quick brown fox jumps over the lazy dog."
Test.assertEquals(isPangram(string), true)
var string = "This is not a pangram."
Test.assertEquals(isPangram(string), false)

// calternate s
// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
//   }