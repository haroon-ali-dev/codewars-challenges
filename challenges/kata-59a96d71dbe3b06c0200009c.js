// link: https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

//my solution:
function generateShape(integer) {
  let string = "";

  for (let i = 0; i < integer; i++) {
    string += wNewLine(integer);
  }

  const stringArray = string.split("");
  stringArray.pop();

  return stringArray.join("");
}

function wNewLine(int) {
  let string = "";

  for (let i = 0; i < int; i++) {
    if (i === int - 1) {
      string += "+\n";
    } else {
      string += "+";
    }
  }

  return string;
}
