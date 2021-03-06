/*
   represent a number as a Roman Numeral 
   Given a positive integer, return a stringh
   containing the Roman Numeral representation
   of thet number.
   Modern Roman numerals are written by expressing
   each digit separately with the left most digit 
   and skipping any digit with a value of 0.
   Example:
   given 1990 return 1000 M , 900 CM, 90 XC
         2008 return 2000 MM, 8 VIII
    table:

      syumbol | value
      _______________
        I     |   1
        V     |   5
        X     |   10
        L     |   50
        C     |   100
        D     |   500
        M     |   1000

    NOTE: each digit can only be represented using 
    a max of 3 roman numerals:
    special cases 4 | IV, 40 | XL, 9 | IX, 90 | XC, 400 | CD, 900 | CM

 */

function solution(number) {
    // start building roman numeral string
    let finalNumeral = '';
    let romanLookup = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, V: 5, IV: 4, I: 1
    };
    // traverse the roman numeral loolkup table
    for (a in romanLookup) {
        while (number >= romanLookup[a]) {
            // build the roman numeral string
            finalNumeral += a;
            //reduce the numbver by the greateesst applicable value
            number -= romanLookup[a];
        }
    }
    return finalNumeral;
}   // end solution()


