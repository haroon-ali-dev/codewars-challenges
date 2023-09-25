// link: https://www.codewars.com/kata/54f9173aa58bce9031001548/train/javascript

//my solution:
function takeWhile(arr, pred) {
    const numbers = [];

    for (let num of arr) {
        if (pred(num)) numbers.push(num);
        if (!pred(num)) break;
    }

    return numbers;
}