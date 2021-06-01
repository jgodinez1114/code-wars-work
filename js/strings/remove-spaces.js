// remove the spaces in a given string and return the string wihout spaces

function noSpace(x) {
    return x.split(' ').join('')
}

console.log(noSpace('kdjf kdjf kdkd    d d           df3'));
console.log(noSpace('kdjf kdjf kdkdd ddf3'));
console.log(noSpace('    d d           df3'));
