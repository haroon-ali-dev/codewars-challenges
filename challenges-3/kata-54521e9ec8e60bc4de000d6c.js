// link: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

//my solution:
var maxSequence = function(arr){
    const sums = [];
    
    if (arr.length === 0) return 0;
    
    if (arr.filter(num => num >= 0).length === 0) return 0;
    
    if (arr.length === 1) return arr[0];
    
    arr.forEach((num, i) => {
      let sum = num;
      
      for (let i2 = i + 1; i2 < arr.length; i2++) {
        sum += arr[i2];
        sums.push(sum);
      }
    });
    
    console.log(sums);
    return (Math.max(...sums));
  }