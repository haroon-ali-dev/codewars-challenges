
// link: https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

//my solution:
function isSortedAndHow(array) {
  let order;
  let storedNum;

  array.forEach((num, i) => {
    if (i <= 0) storedNum = num;

    if ((order === 'yes, ascending' && num < storedNum) || (order === 'yes, descending' && num > storedNum)) {
      order = "no";
      return;
    }

    if (num === storedNum) {
      order = "no";
      return;
    }

    if (array.length === 1 || array.length === 0) {
      order = "no";
      return;
    }

    if (i > 0 && num > storedNum) {
      order = 'yes, ascending';
      storedNum = num;
    } else if (i > 0 && num < storedNum) {
      order = 'yes, descending';
      storedNum = num;
    }
  });

  return order;
}
