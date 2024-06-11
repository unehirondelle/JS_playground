const {log} = require("./log");
const sequence = (funcs) => {
    log(`INITIAL funcs:`, funcs);
    const funcsQueue = [...funcs];

    return function tick(finalCB, data) {
        log(`tick data: ${data} | funcsQueue:`, funcsQueue);
        log(`finalCB:`, finalCB);

        if (funcsQueue.length === 0) {
            finalCB(undefined, data);
            return;
        }

        const currFunc = funcsQueue.shift();

        const currCB = (err, val) => {
            log(`currCB called with: val: ${val}, err:`, err);
            if (err) {
                finalCB(err, val);
            }

            tick(finalCB, val);
        }

        log(`currFunc data: ${data} | funcsQueue:`, funcsQueue);
        log(`currFunc BEFORE`, currFunc);

        currFunc(currCB, data);
        
        log(`currFunc AFTER`, currFunc);
    }
}

module.exports = {sequence};

const times2 = (callback, num) => {
    setTimeout(() => callback(null, num * 2), 100)
}

const times3 = (callback, num) => {
    setTimeout(() => callback(null, num * 3), 100)
}

const plus2 = (callback, num) => {
    setTimeout(() => callback(null, num + 2), 100)
}

const thunk = sequence([times2, times3, plus2]);
const cb = (error, data) => {
    log(`FINALCB CALLED with data: ${data}, error:`, error);
};
thunk(cb, 1);