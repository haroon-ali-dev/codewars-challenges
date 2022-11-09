// link: https://www.codewars.com/kata/53a20af2e0afd3e2cd000333/train/javascript

//my solution:
var say = function (string1) {
  return function (string2) {
    return `${string1} ${string2}`;
  }
}
