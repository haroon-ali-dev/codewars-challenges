// link: https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

//my solution:
function dirReduc(arr) {
    while (checkForOpposites(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (check1st2ndElement(arr[i], arr[i + 1])) {
                arr.splice(i, 2);
            }
        }
    }

    return arr;
}

function checkForOpposites(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (check1st2ndElement(arr[i], arr[i + 1])) {
            return true;
        }
    }
}

function check1st2ndElement(e1, e2) {
    if (e1 === "NORTH" && e2 === "SOUTH" || e1 === "SOUTH" && e2 === "NORTH") return true;
    if (e1 === "EAST" && e2 === "WEST" || e1 === "WEST" && e2 === "EAST") return true;
}

dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);