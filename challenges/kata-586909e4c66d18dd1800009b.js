// link: https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

//my solution:
function multiplyAll(numbers) {
  return function (num) {
    const array = [];

    for (singleNumber of numbers) {
      array.push(singleNumber * num);
    }

    return array;
  }
}
