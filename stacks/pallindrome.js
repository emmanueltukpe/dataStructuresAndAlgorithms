const Stack = require("./stack");

function isPalindrome(word) {
  word = word.toLowerCase();
  const wordStack = new Stack();
  for (let i = 0; i < word.length; i++) {
    wordStack.push(word[i]);
  }
  var reversed = "";
  while (wordStack.len() > 0) {
    reversed += wordStack.pop();
  }
  return reversed == word ? true : false;
}
console.log(isPalindrome("Racecar"));
