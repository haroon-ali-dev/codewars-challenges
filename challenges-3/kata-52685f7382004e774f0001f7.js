// link: https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

//my solution:
function humanReadable(seconds) {
    let hh = Math.floor(seconds / 3600);
    seconds -= hh * 3600;
    let mm = Math.floor(seconds / 60);
    seconds -= mm * 60;
    let ss = seconds;

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    return `${hh}:${mm}:${ss}`;
}