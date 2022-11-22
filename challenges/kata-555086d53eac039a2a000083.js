// link: https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

//my solution:
function lovefunc(flower1, flower2) {
  isFlower1Even = flower1 % 2 === 0 ? true : false;
  isFlower2Even = flower2 % 2 === 0 ? true : false;

  return (isFlower1Even && isFlower2Even) || (!isFlower1Even && !isFlower2Even) ? false : true;
}
