/* Given a stgring of letters, wrte a function accumt() to return each letter capitalized
/  addiontally, repeat each letter depending on its posiiton in the string
   Ex:
        accum("abcd") -> "A-Bb-Ccc-Dddd"
        accum("RqaEzTy") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
*/

function accum(s) {
    let mumbleArray = [];   // have a place to store the mumble string
    let allLowerCase = s.toLowerCase(); // treat each letter as lower case

    for (let i = 0; i < allLowerCase.length; i++) {
        let tempStr = allLowerCase[i].toUpperCase(); // add each letter as aupper case 
        for (let j = 0; j < i; j++) {
            tempStr += allLowerCase[i]; // if second letter or beyond, add more letters
        }
        mumbleArray.push(tempStr);
    }
    return mumbleArray.join("-");   // add required dashes in between the letters 
}

// sample cases
Test.describe("accum", function () {
    Test.it("Basic tests", function () {
        Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
        Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
        Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
        Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
        Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
    })
})