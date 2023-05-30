// link: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

//my solution:
function generateHashtag (str) {
    const newStr = str.replaceAll(" ", "");
    
    if (!newStr) return false;
    
    str = str.trim();
    str = str.replace(/\s+/g, " ");
    
    str = str.split(" ");
    str = str.map(word => {
      word = word.split("");
      word[0] = word[0].toUpperCase();
      
      return word.join("");
    });
    
    str.unshift("#");
    str = str.join("");
    
    if (str.length > 140) return false;
    
    return str;
  }