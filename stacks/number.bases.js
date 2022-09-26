const Stack = require("./stack");

function numBases(n, base) {
  const calc = new Stack();
  do {
    calc.push(n % base);
    n = Math.floor((n /= base));
  } while (n > 0);
  var converted = "";
  while (calc.len() > 0) {
    converted += calc.pop();
  }
  return converted;
}
console.log(numBases(79797643326758, 7));
//number bases from base 10 to 2-9