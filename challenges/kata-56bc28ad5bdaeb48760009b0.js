// link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

//my solution:
function removeChar(str) {
  const split = str.split("");
  split.pop();
  split.shift();
  return split.join("");
}
