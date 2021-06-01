// ATM machines allow 4 or 6 dig PIN codes and PIN codes cannot contain
// anything but exactly 4 or exacltly 6 digits
// if a funciton is passed a valid PIN string, return true, else return fdalse

function validatePIN(pin) {
    // check if string contains whitespace
    if (/\s/g.test(pin)) {
        return false
    }
    for (a of pin) {
        // check if pin contains a non number
        if (isNaN(a)) {
            console.log(`${a} is not a number`)
            return false
        }
    }
    if (pin.length === 4 || pin.length === 6) {
        return true
    }
    return false
} // end validatePIN() 

// alternate solution
function betterValidatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}


console.log(validatePIN('kj3k'))
console.log(betterValidatePIN('sldkjf'))
console.log(betterValidatePIN('4444'))
console.log(betterValidatePIN('jf34'))
console.log(betterValidatePIN('999999'))

// sample tests
// describe("validatePIN", function () {
//     it("should return False for pins with length other than 4 or 6", function () {
//         Test.assertEquals(validatePIN("1"), false, "Wrong output for '1'")
//         Test.assertEquals(validatePIN("12"), false, "Wrong output for '12'")
//         Test.assertEquals(validatePIN("123"), false, "Wrong output for '123'")
//         Test.assertEquals(validatePIN("12345"), false, "Wrong output for '12345'")
//         Test.assertEquals(validatePIN("1234567"), false, "Wrong output for '1234567'")
//         Test.assertEquals(validatePIN("-1234"), false, "Wrong output for '-1234'")
//         Test.assertEquals(validatePIN("1.234"), false, "Wrong output for '1.234'")
//         Test.assertEquals(validatePIN("-1.234"), false, "Wrong output for '-1.234'")
//         Test.assertEquals(validatePIN("00000000"), false, "Wrong output for '00000000'")
//     });

//     it("should return False for pins which contain characters other than digits", function () {
//         Test.assertEquals(validatePIN("a234"), false, "Wrong output for 'a234'")
//         Test.assertEquals(validatePIN(".234"), false, "Wrong output for '.234'")
//     });

//     it("should return True for valid pins", function () {
//         Test.assertEquals(validatePIN("1234"), true, "Wrong output for '1234'");
//         Test.assertEquals(validatePIN("0000"), true, "Wrong output for '0000'");
//         Test.assertEquals(validatePIN("1111"), true, "Wrong output for '1111'");
//         Test.assertEquals(validatePIN("123456"), true, "Wrong output for '123456'");
//         Test.assertEquals(validatePIN("098765"), true, "Wrong output for '098765'");
//         Test.assertEquals(validatePIN("000000"), true, "Wrong output for '000000'");
//         Test.assertEquals(validatePIN("123456"), true, "Wrong output for '123456'");
//         Test.assertEquals(validatePIN("090909"), true, "Wrong output for '090909'");
//     });
// });