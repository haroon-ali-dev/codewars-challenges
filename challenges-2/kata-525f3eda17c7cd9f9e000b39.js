// link: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

//my solution:
function zero(obj = {}) {
  return number(0, obj);
}
function one(obj = {}) {
  return number(1, obj);
}
function two(obj = {}) {
  return number(2, obj);
}
function three(obj = {}) {
  return number(3, obj);
}
function four(obj = {}) {
  return number(4, obj);
}
function five(obj = {}) {
  return number(5, obj);
}
function six(obj = {}) {
  return number(6, obj);
}
function seven(obj = {}) {
  return number(7, obj);
}
function eight(obj = {}) {
  return number(8, obj);
}
function nine(obj = {}) {
  return number(9, obj);
}

function plus(obj) {
  obj.cal = "plus";
  return obj;
}
function minus(obj) {
  obj.cal = "minus";
  return obj;
}
function times(obj) {
  obj.cal = "multiply";
  return obj;
}
function dividedBy(obj) {
  obj.cal = "divide";
  return obj;
}

function number(num, obj) {
  if (!obj.cal) {
    obj.value = num;
    return obj;
  } else {
    if (obj.cal === "multiply") return obj.value * num;
    if (obj.cal === "plus") return obj.value + num;
    if (obj.cal === "minus") return num - obj.value;
    if (obj.cal === "divide") return Math.floor(num / obj.value);
  }
}
