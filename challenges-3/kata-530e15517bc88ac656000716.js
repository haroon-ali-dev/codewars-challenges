// link: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

//my solution:
function rot13(message) {
    const alphabets = Array.from(Array(26))
        .map((e, i) => i + 65)
        .map(code => String.fromCharCode(code));

    message = message.split("").map(char => {
        if (!/^[a-zA-Z]+$/.test(char)) return char;

        let position = alphabets.indexOf(char.toUpperCase());

        for (let i = 1; i <= 13; i++) {
            position++;
            if (position >= 26) position = 0;
        }

        return (char.toLowerCase() === char) ? alphabets[position].toLowerCase() : alphabets[position];
    }).join("");

    return message;
}