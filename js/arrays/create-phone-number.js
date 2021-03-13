//cell-phone-number



// alternate solution
// function createPhoneNumber(numbers) {
//     var format = "(xxx) xxx-xxxx";

//     for (var i = 0; i < numbers.length; i++) {
//         format = format.replace('x', numbers[i]);
//     }

//     return format;
// }

function persistence(num, counter = 0) {
    let subNum = num.toString().split('');
    while (subNum.length > 1) {
        let product = 1;
        product = subNum.reduce((a, b) => a * b);
        subNum = product.toString().split('');
        counter++;
    }
    return counter;
}

console.log(persistence(222));

