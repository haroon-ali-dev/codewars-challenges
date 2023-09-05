// link: https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

//my solution:
var countBits = function(n) {
    const binary = n.toString(2);
    return binary.split("").reduce((a, c) => +c === 1 ? a + 1 : a, 0);
  };