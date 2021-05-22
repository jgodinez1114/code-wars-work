

function duplicateCount(text) {
    text = text.toLowerCase()
    let letters = text.split('')
    let counter = {}
    let duplicates = 0
    // traverse letters in text
    for (a in letters) {
        if (!counter[letters[a]]) {
            counter[letters[a]] = 0
        }

        ++counter[letters[a]]
    }
    // traverse the keys in counter
    for (i in counter) {
        if (couter[i] > 1) {
            duplicates++
        }
    }
    return duplicates;
}   // end duplicateCount()


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
