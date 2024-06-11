const {log} = require("./log");
const parallel = funcs => {
    log(`INITIAL funcs:`, funcs);


    return (finalCB) => {
        const result = Array(funcs.length);
        let isCalled = 0;
        let receivedError = '';

        if (!funcs?.length) {
            finalCB();
            return;
        }

        log(`finalCB:`, finalCB);

        funcs.forEach((currFunc, i) => {
            const currCB = (err, cbData) => {
                log(`currCB called with: val: ${cbData}, err:`, err);
                if (receivedError) {
                    return;
                }

                if (err) {
                    receivedError = err;
                    finalCB(err, undefined);
                    return;
                }

                result[i] = cbData;
                isCalled++;

                if (isCalled === funcs.length) {
                    finalCB(undefined, result);
                }
            }

            log(`currFunc:`, currFunc);

            log(`currFunc BEFORE`, currFunc);

            currFunc(currCB);
        });
    }
};

module.exports = {parallel};

const async1 = (callback) => {
    callback(undefined, 1);
}

const async2 = (callback) => {
    callback(undefined, 2);
}

const async3 = (callback) => {
    callback(undefined, 3);
}

const asyncError = callback => {
    callback('error occurred');
}

// const all = parallel([async1, async2, async3]);

const all = parallel([async1, asyncError, asyncError]);

all((error, data) => {
    log(`FINALCB CALLED with data: ${data}, error:`, error); // [1, 2, 3]
}, 1)