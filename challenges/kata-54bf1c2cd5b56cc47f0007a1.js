// link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

//my solution:
function duplicateCount(text) {
  const obj = {};
  let count = 0;

  for (char of text.toLowerCase()) {
    if (char in obj === false) {
      obj[char] = 1;
    } else if (char in obj) {
      obj[char]++;
    }
  }

  for (let key in obj) {
    if (obj[key] >= 2) count++;
  }

  return count;
}