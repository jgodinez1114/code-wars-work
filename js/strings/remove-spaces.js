// remove the spaces in a given string and return the string wihout spaces

function noSpace(x) {
    return x.split(' ').join('')
}

// alternate solution
function betterNoSpace(x) {
    /*
     \s means "any white space character, including space, tab, form feed or line feed"
     g is a flag meaning "global search"
     so /\s/g means "look for every white space char."
     */
    return x.replace(/\s/g, '')
}

console.log(noSpace('kdjf kdjf kdkd    d d           df3'));
console.log(noSpace('kdjf kdjf kdkdd ddf3'));
console.log(noSpace('    d d           df3'));
