
// link: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

//my solution:
function arrayDiff(a, b) {
  if (b.length > 0) {
    let filtered = a;

    for (let num of b) {
      a = a.filter(num2 => num !== num2);
    }
    return a;
  } else {
    return a;
  }
}