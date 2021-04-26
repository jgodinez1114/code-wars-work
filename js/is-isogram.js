/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that contains only letters is an isogram.
 * Assume the empty string is an isogram. Ignore letter case.

 * isIsogram("Dermatoglyphics") == true
 * isIsogram("aba") == false
 * isIsogram("moOse") == false // -- ignore letter case
 *
*/

function isIsogram(str) {
    // return true if string is empty
    if (str === '') {
        return true;
    }
    // convert string to lowercase
    str = str.toLowerCase();
    // split string into array
    let lettersOnly = str.split('');
    // store letters already checked
    let lettersChecked = [];
    // traverse string letters
    for (a of lettersOnly) {
        // if this letter has already appeared 
        if (lettersChecked.includes(a)) {
            return false;
        }
        // add this letter to lettersChecked
        lettersChecked.push(a);
    }
    return true;
}   // end isIsogram()

console.log('sending alskjdfIIIid', isIsogram('alskjdfIIIid'));
console.log('sending \'\'', isIsogram(''));
