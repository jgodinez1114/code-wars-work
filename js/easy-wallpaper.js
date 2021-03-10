
/*Description:
John wants to decorate a room with wallpaper. He has been said that making sure he has the right amount of wallpaper is more complex than it sounds. He wants a fool-proof method to getting it right.

John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

Last time he did these calculations he caught a headache so could you help John? Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

#Example: wallpaper(4, 3.5, 3) should return "ten"

#Notes:

all rolls (even with incomplete width) are put edge to edge
0 <= l, w, h (floating numbers), it can happens that w x h x l is zero
the integer r (number of rolls) will always be less or equal to 20
*/

function wallpaper(l, w, h) {

    const paperSize = 5.2;
    // calculate square meters
    let area = l * h * 2 + h * w * 2;
    //compensate
    let compensatedArea = area * 1.15;
    // round up, get value of int as a number
    return numbers[Math.ceil(compensatedArea / paperSize)];
}
// clever solution vvvvv
// function wallpaper(l, w, h) {
//     let arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
//     return (l==0 || w == 0 || h == 0) ? arr[0] : arr[Math.ceil(2.3*((l/0.52)/(10/h)+(w/0.52)/(10/h)))];
//   }

function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

// Tests
Test.describe("wallpaper", function () {
    Test.it("Basic tests", function () {
        testing(wallpaper(6.3, 4.5, 3.29), "sixteen");
        testing(wallpaper(7.8, 2.9, 3.29), "sixteen");
        testing(wallpaper(6.3, 5.8, 3.13), "seventeen");
        testing(wallpaper(6.1, 6.7, 2.81), "sixteen");
    })
})