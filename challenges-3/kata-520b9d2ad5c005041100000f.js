// link: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

//my solution:
function pigIt(str) {
    str = str.split(" ").map(word => {
        if (/^[a-zA-Z]+$/.test(word)) {
            const wordArray = word.split("");
            const firstLetter = wordArray[0];

            wordArray.push(firstLetter);
            wordArray.shift();
            let newWord = wordArray.join("");

            return newWord += "ay";
        } else {
            return word;
        }
    }).join(" ");

    return str;
}