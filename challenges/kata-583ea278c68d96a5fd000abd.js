// link: https://www.codewars.com/kata/583ea278c68d96a5fd000abd/train/javascript

//my solution:
function sortByLanguage(list) {
    list = list.sort((a, b) => {
        let fa = a.language.toLowerCase(),
            fb = b.language.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

    const repeatedLanguages = [];

    for (let key in list) {
        const count = list.reduce((a, c) => list[key].language === c.language ? a + 1 : a, 0);
        if (count > 1) repeatedLanguages.push(list[key].language);
    }

    for (let language of repeatedLanguages) {
        list = list.sort((a, b) => {
            if (a.language === language && b.language === language) {
                let fa = a.firstName.toLowerCase(),
                    fb = b.firstName.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }
            return 0;
        });
    }

    return list;
}