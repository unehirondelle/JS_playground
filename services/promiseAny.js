const promiseAny = promises => {
    if (promises.length === 0) {
        const err = new AggregateError("No Promise passed");
        throw err;
    }

    return new Promise((resolve, reject) => {
        let inProgress = 0;
        const errors = Array(promises.length);
        promises.forEach((promise, i) => {
            Promise.resolve(promise)
                .then(res => resolve(res))
                .catch(err => {
                    errors[i] = err;
                    if (++inProgress === promises.length) {
                        const error = new AggregateError(
                            'No Promise in Promise.any was resolved',
                            errors
                        );
                        reject(error);
                    }
                });
        });
    });
};

module.exports = {promiseAny};