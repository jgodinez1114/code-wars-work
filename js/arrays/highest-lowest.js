/*
  given a string of space-separated numbers, return the highest and lowest number. 
  ex: highAndLow('1 2 3 4 5')   // return '5 1'
  * all numbers are valid Int32, no need to validate them.
  * there will always  be at least one number in the input string
  * ouptut string must be two numbers separated by a single space, highest number first
 */

function highAndLow(numbers) {
    numbers = numbers.split(" ");
    if (numbers.length > 1) {
        let high = numbers[0];
        let low = numbers[0];

        for (a of numbers) {
            if (Number(a) > high) {
                high = a;
            }
            if (Number(a) < low) {
                low = a;
            }
        }
        return high + " " + low;
    } else {
        return `${numbers[0]} ${numbers[0]}`;
    }
}

// alt solution
// function highAndLow(numbers) {
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }




