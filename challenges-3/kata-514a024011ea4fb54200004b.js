// link: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

//my solution:
function domainName(url) {
    url = url.replace("http://", "");
    url = url.replace("https://", "");
    url = url.replace("www.", "");
    url = url.split(".")[0];

    return url;
}