// link: https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript

//my solution:
function orderFood(list) {
  const obj = {};

  for (let dev of list) {
    if (!obj[dev.meal]) obj[dev.meal] = 1;
    else obj[dev.meal]++;
  }

  return obj;
}