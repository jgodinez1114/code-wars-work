// function to decode morse code with pre-built dictionary

function decodeMorse(morseCode) {
    // split string by double spaces
    var words = morseCode.split("   ");
    var finalCode = ""

    for (var i in words) {
        // check if word is not empty
        if (words[i] != '') {
            // check string by single spaces
            var word = words[i].split(" ");
            for (var j in word) {
                // check for existence of a letter
                if (word[j] != '') {
                    // get the value for this morse code and build the final string
                    finalCode += MORSE_CODE[word[j]];
                }
            }
            // check non empty finalCode
            if (i < words.length - 1) {
                finalCode += " "
            }
        }
    }
    return finalCode;
}