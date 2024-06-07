const promiseAllSettled = promises => {
    return new Promise((resolve) => {
        const result = Array(promises.length);

        if (promises.length === 0) {
            resolve([]);
        }

        let inProgress = 0;
        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(res => {
                result[i] = {status: 'fulfilled', value: res};
            }).catch(err => {
                result[i] = {status: 'rejected', reason: err};
            }).finally(() => {
                    if (++inProgress === promises.length) {
                        resolve(result);
                    }
                }
            );
        });
    });
};

module.exports = {promiseAllSettled};