// link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//my solution:
function findOdd(A) {
  const appearances = {};
  const unique = [... new Set(A)];

  for (uNum of unique) {
    appearances[uNum] = 0;

    for (num of A) {
      if (num === uNum) appearances[uNum]++;
    }
  }

  for (let key in appearances) {
    if (appearances[key] % 2 !== 0) return Number(key);
  }
}
