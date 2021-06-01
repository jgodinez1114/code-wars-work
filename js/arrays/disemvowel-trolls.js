/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

function disemvowel(str) {
    let vowels = 'aeiouAEIOU';
    let vowelLess = '';
    for (a of str) {
        if (!vowels.includes(a))
            vowelLess += a;
    }
    return vowelLess;
}

// sample tests
Test.assertEquals(disemvowel("This website is for losers LOL!"),
    "Ths wbst s fr lsrs LL!")

// alternate solution (using regex)
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }
//     // it's regexp - regular expression.
    // / - start regexp
    // [] - one of symbols
    // / - parameters
    // g - global - replace all symbols, not first find
    // i - case ignore. With him A === a
    // sorry my eng)