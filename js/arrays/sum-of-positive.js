//get the sum of paositive numbers in a given array
function positiveSum(arr) {
    let sum = 0;
    for (a of arr) {
        if (a > 0)
            sum += a;
    }
    return sum;
}

// sample tests
Test.assertEquals(positiveSum([1, 2, 3, 4, 5]), 15);
Test.assertEquals(positiveSum([1, -2, 3, 4, 5]), 13);
Test.assertEquals(positiveSum([]), 0);
Test.assertEquals(positiveSum([-1, -2, -3, -4, -5]), 0);
Test.assertEquals(positiveSum([-1, 2, 3, 4, -5]), 9);
