// link: https://www.codewars.com/kata/55b86beb1417eab500000051/train/javascript

//my solution:
function gap(num) {
  const binary = num.toString(2);

  let zeroCount = 0;
  const zeroCountArray = [];

  for (let num of binary) {
    if (num == 0) zeroCount++;
    if (zeroCount > 0 && num == 1) {
      zeroCountArray.push(zeroCount);
      zeroCount = 0;
    }
  }

  return zeroCountArray.length === 0 ? 0 : Math.max(...zeroCountArray);
}
