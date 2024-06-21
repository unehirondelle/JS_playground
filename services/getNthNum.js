const {log} = require("./log");

const calculateNext = (previous) => {
    let currChar;
    let count = 0;
    let innerRes = '';

    for (let j = 0; j < previous.length; j++) {
        currChar = previous[j];

        if (currChar === previous[j + 1]) {
            log(`same char`);
            count++;
        } else {
            count++;
            log(`dump buffer to str: ${count}${currChar}`);
            innerRes += `${count}${currChar}`;
            count = 0;
        }
    }
    return innerRes;
};

const getNthNum = (n) => {
    let res = '1';

    if (n === 1) {
        return res;
    }

    let currentTick = 2;

    while (currentTick <= n) {
        log(`--------TICK-------previous: ${res} | tick: ${currentTick}`);
        res = calculateNext(res);
        log(`--------END-------res: ${res} for nth: ${currentTick}`);
        currentTick++;
    }
    log(`res: ${res}`);

    return res;
};

module.exports = {getNthNum};