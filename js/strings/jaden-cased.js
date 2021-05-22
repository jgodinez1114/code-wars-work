/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and 
After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, 
you'll have to capitalize each word, check out how contractions are expected to be in the example
 below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" 
 *
 *
 */

String.prototype.toJadenCase = function () {
    let words = this.split(" "); // split the sentence into words
    let jadenCased = []; // create array to store output
    for (a of words){ // traverse the words in the sentence
      if(a[0] !== a[0].toUpperCase()){
        a = a[0].toUpperCase() + a.substr(1)
      } 
      jadenCased.push(a);
    }
    return jadenCased.join(" ");
  };

// alternate solution
//   let words = this.split(" ");
  
//   words.map((el) => {
//       return el[0].toUpperCase + el.substr(1);
//   }).join(" ");

// test
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
