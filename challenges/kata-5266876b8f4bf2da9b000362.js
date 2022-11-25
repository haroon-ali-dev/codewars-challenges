// link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

//my solution:
function likes(names) {
  const howMany = names.length;

  if (howMany === 0) {
    return "no one likes this";
  } else if (howMany === 1) {
    return `${names[0]} likes this`;
  } else if (howMany === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (howMany === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (howMany > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
