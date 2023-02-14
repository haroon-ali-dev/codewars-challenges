// link: https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

//my solution:
function addUsername(list) {
  return list.map(dev => {
    dev.username = `${dev.firstName.toLowerCase()}${dev.lastName.toLowerCase()[0]}${2020 - dev.age}`;
    return dev;
  });
}

const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]

console.log(addUsername(list1));