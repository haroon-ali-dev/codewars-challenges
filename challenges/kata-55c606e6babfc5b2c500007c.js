// link: https://www.codewars.com/kata/55c606e6babfc5b2c500007c/train/javascript

//my solution:
var FilterNumbers = function (str) {
  return str.split('').filter(c => !/\d/.test(c)).join('');
}
