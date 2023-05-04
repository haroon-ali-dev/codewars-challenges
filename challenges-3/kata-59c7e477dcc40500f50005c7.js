// link: https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript

//my solution:
function isOddHeavy(n) {
    const odds = n.filter(num => num % 2 !== 0);

    if (odds.length === 0) return false;

    const evens = n.filter(num => num % 2 === 0);

    const result = odds.every(oddNum => {
        const result = evens.every(evenNum => oddNum > evenNum);
        return result;
    });

    return result;
}