// link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

//my solution:
function sortArray(array) {
    const indexes = [];
    const odds = [];
    
    array.forEach((num, index) => {
      if (num % 2 !== 0) {
        indexes.push(index);
        odds.push(num);
      }
    });
    
    odds.sort(function(a, b){
      return a-b;
    });
    
    indexes.forEach((i, index) => {
      array[i] = odds[index];
    });
    
    return array;
  }