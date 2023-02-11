// link: https://www.codewars.com/kata/5905871c00881d0e85000015/train/javascript

//my solution:
function mixFruit(arr) {
  const fruits = {
    "banana": 5,
    "orange": 5,
    "apple": 5,
    "lemon": 5,
    "grapes": 5,
    "avocado": 7,
    "strawberry": 7,
    "mango": 7
  };

  let total = 0;

  for (let fruit of arr) {
    if (fruits[fruit.toLowerCase()]) {
      total += fruits[fruit.toLowerCase()];
    } else {
      total += 9;
    }
  }

  return Math.round(total / arr.length);

}