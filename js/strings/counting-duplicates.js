

function duplicateCount(text) {
    let letters = text.toLowerCase().split("")
    let counter = {}
    let duplicates = 0
    // traverse letters in text
    for (a in letters) {
        // check if this letter exists in counter object
        if (!counter[letters[a]]) {
            // if not, initialize counter for this element at 0
            counter[letters[a]] = 0
        }
        // increment value for this element
        ++counter[letters[a]]
    }
    // traverse the keys in counter
    for (i in counter) {
        if (counter[i] > 1) {
            duplicates++
        }
    }
    return duplicates;
}   // end duplicateCount()

// alternate solution
function betterDuplicateCount(text) {
    return (text.split('').sort().join('').match(/([^])\1+/gi) || []).length;
}


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(duplicateCount(""), 0);
        Test.assertEquals(duplicateCount("abcde"), 0);
        Test.assertEquals(duplicateCount("aabbcde"), 2);
        Test.assertEquals(duplicateCount("aabBcde"), 2, "should ignore case");
        Test.assertEquals(duplicateCount("Indivisibility"), 1)
        Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

    });
});
