// take in an array, add up the number in the array to get a target sum

// let namesList = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];
// console.log(`length of namesList: ${Object.keys(namesList).length}`);
// for (i of namesList) {
//     let keys = Object.keys(i);
//     let value = i[keys[0]];
//     console.log(keys, value)
// }

//console.log(keys, value)

function list(names) {
    let formattedStr = '';
    if (names.length !== 0) {
        for (let i = 0; i < names.length; i++) {
            if (i >= names.length - 2) {
                formattedStr += names[i]["name"] + " & ";
            } else {
                formattedStr += names[i]["name"] + ", ";
            }
        }
    }
    return formattedStr.slice(0, formattedStr.length - 1);
}

// sample tests
Test.assertEquals(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge',
    "Must work with many names")
Test.assertEquals(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie',
    "Must work with many names")
Test.assertEquals(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa',
    "Must work with two names")
Test.assertEquals(list([{ name: 'Bart' }]), 'Bart', "Wrong output for a single name")
Test.assertEquals(list([]), '', "Must work with no names")
list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }])