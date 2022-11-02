// link: https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

//my solution:
function past(h, m, s) {
  const hConverted = h * 3.6e+6;
  const mConverted = m * 60000;
  const sConverted = s * 1000;

  return hConverted + mConverted + sConverted;
}
