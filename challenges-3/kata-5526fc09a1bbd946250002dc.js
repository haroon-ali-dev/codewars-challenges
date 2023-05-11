// link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

//my solution:
function findOutlier(integers){
    const filterOdds = integers.filter(num => num % 2 !== 0);
    const filterEvens = integers.filter(num => num % 2 === 0);
    
    if (filterOdds.length === 1) return filterOdds[0];
    if (filterEvens.length === 1) return filterEvens[0];
  }