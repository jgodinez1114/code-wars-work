// given a string wit h dashes and underscores, return the string in camelcase
// ex. given 'the-stealth-warrio' --> theStealthWarrior

function toCamelCase(str) {
    // use new array for changes to string
    let camelStr = []
    // check for dashes or underscores
    if (str.includes('-')) {
        str = str.split('-')
        // no need to change first word. push as is
        camelStr.push(str[0])
        // traverse the string starting a the 2nd element
        for (var i = 1; i < str.length; i++) {
            // change the first letter and push to the camelString
            camelStr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1, str[i].length))
        }
    } else if (str.includes('_')) {
        str = str.split('_')
        // no need to change first word. push as is
        camelStr.push(str[0])
        // traverse the string starting a the 2nd element
        for (var i = 1; i < str.length; i++) {
            // change the first letter and push to the camelString
            camelStr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1, str[i].length))
        }
    }
    console.log(camelStr.join(''))
    return camelStr.join('')
}

// alternate solution
function betterToCamelCase(str) {
    return str.replace(/[_-]\w/gi, secondChar => secondChar[1].toUpperCase())
}

toCamelCase('hti-test-last')
toCamelCase('hti_test_last')
toCamelCase('the_stealth_warrior')
toCamelCase('A-B-C')
console.log(betterToCamelCase('hti-test-last'))
console.log(betterToCamelCase('hti_test_last'))
console.log(betterToCamelCase(''))
console.log(betterToCamelCase('hti_test_lsdfalskdjhfast'))



// sample tests
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
//         Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
//         Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
//         Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

//     });
// });
