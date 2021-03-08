// square every digit of a number and concatenate them.
// ex: given 9119, output: 811181

function squareDigits(num) {
    let squaredString = '';
    // convert num to str
    let numList = num.toString();
    // iterate throug each digit
    for (a of numList) {
        squaredString += (a ** 2).toString();
    }
    return Number(squaredString);
}