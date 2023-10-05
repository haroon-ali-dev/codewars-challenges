// link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

//my solution:
function firstNonRepeatingLetter(s) {
    const lowerCase = s.toLowerCase().split("");
    let charCheck;

    for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase.indexOf(lowerCase[i]) === lowerCase.lastIndexOf(lowerCase[i])) {
            charCheck = s[i];
            break;
        }
    }

    return charCheck ? charCheck : "";
}