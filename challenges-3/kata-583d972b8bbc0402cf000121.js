// link: https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript

//my solution:
function askForMissingDetails(list) {
    return list.filter(dev => {
        if (Object.values(dev).find(val => val === null) === null) return dev;
    })
        .map(dev => {
            for (let key in dev) {
                if (dev[key] === null) {
                    dev["question"] = `Hi, could you please provide your ${key}.`;
                }
            }

            return dev;
        });
}