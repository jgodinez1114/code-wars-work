/* goal: sort a given string. Each word in a the string will contain a single number.
  The number contained in each word 2will determing the position this word
  will have in the resulting string.
  Ex: given 'is2 Thi1s T4est 3a'  --> 'Thi1s is2 3a T4est'
*/

function sortWords(words) {
    // split words into array elemtns
    words = words.split(' ')
    // declare Array result
    let orderedWords = []
    // declare initial index for result
    let myIndex = 1
    // traverse the words array
    for (var i = 0; i < words.length; i++) {
        // checkif the index (1,2, ...) exists in the current element
        // NOTE: indexOf() returns a -1 if the element in question is not found
        if (words[i].indexOf(myIndex) > -1) {
            // push this lement in to the rsult
            orderedWords.push(words[i])
            // reset the index
            i = -1
            // increment my index
            myIndex++
        }
    }
    // retuyrn the result
    return orderedWords.join(' ')
}   // end sortWords()

console.log(sortWords('is2 Thi1s T4est 3a'))
console.log(sortWords('is3 Thi4s T1est 2a'))
