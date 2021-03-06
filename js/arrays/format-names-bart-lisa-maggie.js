/* given an array containing hashes of names, return a formatted strting as a list
   of names separated by commas except for the last 2 which should be separated by
   an ampersand
   example:
     given [{name: 'Bart', name: 'Lisa', name: 'Maggie'}]
     return 'Bart, Lisa, and Maggie'

*/


function list(names) {
    // use an emepty string for formatted version
    let formattedStr = '';
    // check if lenfth of names array is not emtpy
    if (names.length !== 0) {
        // traverse array of names
        for (let i = 0; i < names.length; i++) {
            // check if length is 0 or 1
            if (i >= names.length - 2) {
                // add hash name as "name & "
                formattedStr += names[i]["name"] + " & ";
            } else {
                // add hash name as "name, "
                formattedStr += names[i]["name"] + ", ";
            }
        }
    }
    return formattedStr.slice(0, formattedStr.length - 3);
}   //end list()

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]);

// sample tests
Test.assertEquals(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge',
    "Must work with many names")
Test.assertEquals(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie',
    "Must work with many names")
Test.assertEquals(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa',
    "Must work with two names")
Test.assertEquals(list([{ name: 'Bart' }]), 'Bart', "Wrong output for a single name")
Test.assertEquals(list([]), '', "Must work with no names")

// alternate solution

// function list(names) {
//     // NOTE: the reduce function executes the callback for each assigned value present in the array
//     // four arguments(1. accumulator, 2. currentVal, currentIndex, array)
//     return names.reduce(function (prev, current, index, array) {
//         if (index === 0) {
//             return current.name;
//         } else if (index === array.length - 1) {
//             return prev + ' & ' + current.name;
//         } else {
//             return prev + ', ' + current.name;
//         }
//     }, '');
// }