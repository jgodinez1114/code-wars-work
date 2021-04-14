/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

 * If you want to know more http://en.wikipedia.org/wiki/DNA

 * In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
 * You have function with one side of the DNA (string, except for Haskell); you need to get the 
 * other complementary side. DNA strand is never empty or there is no DNA at all 
 */

// functoin to return a complementary DNA string 
function DNAstrand(dna) {
    let dnaStrands = dna.split('');
    let complementaryDNA = [];

    for (a of dnaStrands) {
        if (a === 'A') {
            a = 'T';
        } else if (a === 'T') {
            a = 'A';
        } else if (a === 'C') {
            a = 'G';
        } else if (a === 'G') {
            a = 'C';
        }
        complementaryDNA.push(a);
    }
    return complementaryDNA.join('');
}   // end DNAstrand()

console.log('sending TTTAACCCGG', DNAstrand('TTTAACCCGG'));

// sample tests
Test.assertEquals(DNAStrand("AAAA"), "TTTT", "String AAAA is");
Test.assertEquals(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
Test.assertEquals(DNAStrand("GTAT"), "CATA", "String GTAT is");
