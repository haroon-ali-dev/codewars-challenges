// link: https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

//my solution:
function findAdmin(list, lang) {
  return list.filter(dev => dev.language === lang && dev.githubAdmin === "yes");
}
