const promiseRace = promises => {
    if (!promises.length) {
        return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(resolve, reject);
        });
    });
};

module.exports = {promiseRace};