// link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

//my solution:
function incrementString(strng) {
    if (!/^\d+$/.test(strng[strng.length - 1])) {
        strng += "1";
        return strng;
    }

    let firstPart = "";
    let numberStrng = "";

    for (let i = strng.length - 1; i >= 0; i--) {
        if (!/^\d+$/.test(strng[i])) {
            firstPart = strng.split("").slice(0, i + 1).join("");
            numberStrng = strng.split("").slice(i + 1, strng.length).join("");
            break;
        }
    }

    numberStrng = (!numberStrng) ? strng : numberStrng;

    let newNumber = +numberStrng + 1;
    newNumber = newNumber.toString().padStart(numberStrng.length, "0");

    strng = firstPart + newNumber;

    return strng;
}