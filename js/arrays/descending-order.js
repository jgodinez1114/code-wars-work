

function descendingOrder(n) {
    n = JSON.stringify(n).split("");    // treat int as string and split
    return Number(n.sort((a, b) => b - a).join("")); // sort and join the new int
}

// sample tests
Test.assertEquals(descendingOrder(0), 0);
Test.assertEquals(descendingOrder(1), 1);
Test.assertEquals(descendingOrder(123456789), 987654321)


