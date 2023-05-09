// link: https://www.codewars.com/kata/58381907f8ac48ae070000de/train/javascript

//my solution:
function isLanguageDiverse(list) {
    const languageStats = {
        "JavaScript": 0,
        "Python": 0,
        "Ruby": 0
    };

    languageStats["JavaScript"] = list.reduce((a, c) => c.language === "JavaScript" ? a + 1 : a, 0);
    languageStats["Python"] = list.reduce((a, c) => c.language === "Python" ? a + 1 : a, 0);
    languageStats["Ruby"] = list.reduce((a, c) => c.language === "Ruby" ? a + 1 : a, 0);

    for (let key1 in languageStats) {
        for (let key2 in languageStats) {
            console.log(key1, languageStats[key1], key2, languageStats[key2]);
            if (key1 !== key2 && languageStats[key1] / languageStats[key2] > 2) {
                console.log(false);
                return false;
            }
        }
    }

    return true;
}