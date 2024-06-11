const race = funcs => {
    return finalCB => {
        if (!funcs?.length) {
            finalCB();
            return;
        }

        let receivedError = '';
        let result;


        funcs.forEach(currFunc => {
            const currCb = (err, cbData) => {
                if (receivedError || result) {
                    return;
                }

                if (err) {
                    receivedError = err;
                    finalCB(err, undefined);
                    return;
                }

                if (cbData) {
                    result = cbData;
                    finalCB(undefined, cbData);
                }
            };
            currFunc(currCb);
        });
    };
};

module.exports = {race};

const async1 = (callback) => {
    setTimeout(() => callback(undefined, 1), 300)
}

const async2 = (callback) => {
    setTimeout(() => callback(undefined, 2), 100)
}

const async3 = (callback) => {
    setTimeout(() => callback(undefined, 3), 200)
}

const first = race(
    [
        async1,
        async2,
        async3
    ]
)

first((error, data) => {
    console.log(data) // 2, since 2 is the first to be given
}, 1)