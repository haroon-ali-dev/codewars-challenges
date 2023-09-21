// link: https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript

//my solution:
function findOddNames(list) {
    return list.filter(dev => {
        const asciiTotal = dev.firstName.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
        if (asciiTotal % 2 !== 0) return dev;
    });
}