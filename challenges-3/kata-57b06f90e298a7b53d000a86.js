// link: https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

//my solution:
function queueTime(customers, n) {
    let time = 0;

    n = (n > customers.length) ? customers.length : n;

    while (customers.length > 0) {
        let currentRoundCount = 0;

        for (let i = 0; i < n; i++) {
            if (customers[i]) {
                customers[i]--;

                if (currentRoundCount <= 0) {
                    time++;
                    currentRoundCount++;
                }
            }
        }
        customers = customers.filter(num => num !== 0);
        currentRoundCount = 0;
    }
    return time;
}

queueTime([1, 2, 3, 4, 5], 100);