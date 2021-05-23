/*
 given a string, replace every letter with it's position in the alphabet. if anuthing
 in the text is not a letter, ignore it and don't return it
 */

function alphabetPosition(text) {
    // remove spaces, convert to lowercase, rejoin text
    tempText = text.toLowerCase().split(' ').join()
    text = ''
    let alphaNumbered = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6,
        'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12,
        'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18,
        's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24,
        'y': 25, 'z': 26
    }
    // traverse the text given
    for (a in tempText) {
        // if the character in the string is not a letter
        if (!alphaNumbered[tempText[a]]) {
            // do nothing
        } else {
            text += alphaNumbered[tempText[a]] + ' '
        }
    }
    return text.substring(0, text.length - 1)
}   // end alphabetPosition()

// alternate solution
function betterAlphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
        .filter(letter => {
            let index = alphabet.indexOf(letter);
            return index > -1;
        })
        .map(letter => alphabet.indexOf(letter) + 1)
        .join(' ')
}

console.log(alphabetPosition('this is a good day!'));
console.log(alphabetPosition('z.z.z/z.z/z.z/z.z/z.'));

// sample tests
describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
        Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
    });
});
