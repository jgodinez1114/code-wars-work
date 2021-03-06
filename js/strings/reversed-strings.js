// reverse the string passed into the function

function solution(str) {
    let reversed = '';
    for (a of str) {
        reversed += str[str.length - 1];
        str = str.slice(0, -1);
    }
    return reversed;
}   //  end solution()

// sample tests

Test.assertEquals(solution('world'), 'dlrow')
Test.assertEquals(solution('hello'), 'olleh')
Test.assertEquals(solution(''), '')
Test.assertEquals(solution('h'), 'h')

// alternate solution
// function solution(str){
//     return str.split('').reverse().join('');  
//   }
