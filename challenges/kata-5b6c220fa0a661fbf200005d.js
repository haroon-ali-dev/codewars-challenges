// link: https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/train/javascript

//my solution:
function scoreboard(string) {
  const split = string.split(" ");
  const score1 = split[split.length - 2];
  const score2 = split[split.length - 1];

  const scoreArray = [];

  if (score1 === "nil") {
    scoreArray.push(0);
  } else if (score1 === "one") {
    scoreArray.push(1);
  } else if (score1 === "two") {
    scoreArray.push(2);
  } else if (score1 === "three") {
    scoreArray.push(3);
  } else if (score1 === "four") {
    scoreArray.push(4);
  } else if (score1 === "five") {
    scoreArray.push(5);
  } else if (score1 === "six") {
    scoreArray.push(6);
  } else if (score1 === "seven") {
    scoreArray.push(7);
  } else if (score1 === "eight") {
    scoreArray.push(8);
  } else if (score1 === "nine") {
    scoreArray.push(9);
  }

  if (score2 === "nil") {
    scoreArray.push(0);
  } else if (score2 === "one") {
    scoreArray.push(1);
  } else if (score2 === "two") {
    scoreArray.push(2);
  } else if (score2 === "three") {
    scoreArray.push(3);
  } else if (score2 === "four") {
    scoreArray.push(4);
  } else if (score2 === "five") {
    scoreArray.push(5);
  } else if (score2 === "six") {
    scoreArray.push(6);
  } else if (score2 === "seven") {
    scoreArray.push(7);
  } else if (score2 === "eight") {
    scoreArray.push(8);
  } else if (score2 === "nine") {
    scoreArray.push(9);
  }

  return scoreArray;
}