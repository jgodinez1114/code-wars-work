// fiven a string, remove the first ans last characters 
// so not worry if the string is only 2 characters

function removeChar(str) {
    if (str.length < 3) {
        return str;
    } else {
        str = str.split("");
        str.pop();
        str.shift();
        return str.join("");
    }
}

// sample tests
Test.describe("Tests", function () {

    Test.assertEquals(removeChar('eloquent'), 'loquen');
    Test.assertEquals(removeChar('country'), 'ountr');
    Test.assertEquals(removeChar('person'), 'erso');
    Test.assertEquals(removeChar('place'), 'lac');

});

// alternate solutoins
// function removeChar(str) {
//     return str.slice(1, -1);
// }