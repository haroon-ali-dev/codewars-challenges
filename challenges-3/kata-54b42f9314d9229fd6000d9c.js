// link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

//my solution:
function duplicateEncode(word){
    let string = "";
    word = word.split("");
    
    for (let char of word) {
      if (word.reduce((a, c) => c.toLowerCase() === char.toLowerCase() ? a + 1 : a, 0) > 1) {
        string += ")";
      } else {
        string += "(";
      }
    }
    
    return string;
  }