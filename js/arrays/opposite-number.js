// return the opposit of a number  given
function opposite(number) {
    //console.log(Math.sign(number));
    if (Math.sign(number) === 1) {
        return number - (2 * (Math.abs(number)));
    } else if (Math.sign(number) === -1) {
        return number + (2 * (Math.abs(number)));
    } else if (Math.sign(number) === 0 || Math.sign(number) === -0) {
        return 0;
    }
}

// A number representing the sign of the given argument:

// If the argument is positive, returns 1.
// If the argument is negative, returns -1.
// If the argument is positive zero, returns 0.
// If the argument is negative zero, returns -0.
// Otherwise, NaN is returned.

