// link: https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript

//my solution:
function getVillainName(birthday) {
  const m = ["Evil", "Vile", "Cruel", "Trashy", "Despicable", "Embarrassing", "Disreputable", "Atrocious", "Twirling", "Orange", "Terrifying", "Awkward"];
  const d = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];

  const dateString = birthday.getDate().toString();

  return `The ${m[birthday.getMonth()]} ${d[dateString[dateString.length - 1]]}`;
}
