// Given an array of ints, find the ont that appears an odd number of times
// NOTE: Theres will always be only 1 int that appears an odd number of times

function findOdd(Arr) {
    // new object to store counts
    let counts = {};

    for (i in Arr) {
        // if element is a falsy or not found
        if (!counts[Arr[i]]) {
            counts[Arr[i]] = 0;
        }
        // increment value  to the next object 
        ++counts[Arr[i]];
    }
    // iterate thriugh the k,v of counts object
    for (let [key, value] of Object.entries(counts)) {
        if (value % 2 !== 0) {
            return Number(key);
        }
    }
}   // end of findOdd()

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// sample tests
function doTest(a, n) {
    console.log("A = ", a);
    console.log("n = ", n);
    Test.assertEquals(findOdd(a), n);
}
Test.describe('Example tests', function () {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});

/* alternate solution:
function findOdd(A) {
    var obj = {};
    A.forEach(function (el) {
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for (prop in obj) {
        if (obj[prop] % 2 !== 0) return Number(prop);
    }
}
*/