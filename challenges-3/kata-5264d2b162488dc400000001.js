// link: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

//my solution:
function spinWords(string) {
    return string.split(" ")
        .map(word => word.length >= 5 ? word.split("").reverse().join("") : word)
        .join(" ")
}