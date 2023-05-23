// link: https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

//my solution:
function cakes(recipe, available) {
    let allAvailable = true;
    let availableFits = true;

    for (let key in recipe) {
        if (key in available === false) {
            allAvailable = false;
            break;
        }
    }

    if (!allAvailable) return 0;

    for (let key in recipe) {
        if (available[key] - recipe[key] < 0) {
            console.log(recipe[key], available[key]);
            availableFits = false;
            break;
        }
    }

    if (!availableFits) return false;

    const divisions = [];

    for (let key in recipe) {
        divisions.push(Math.floor(available[key] / recipe[key]));
    }

    return Math.min(...divisions);
}