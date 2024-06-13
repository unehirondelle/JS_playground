const throttlePromises = (funcs, max) => {
    let result = [];
    let error;
    return new Promise((resolve, reject) => {
        if (!funcs?.length) {
            resolve(result);
        }
        let inProgress = 0;
        const funcsQueue = funcs.map((fn, i) => [fn, i]);

        const tick = () => {
            if (error) {
                reject(error);
            }

            while (inProgress < max && funcsQueue.length > 0 && !error) {
                const [func, i] = funcsQueue.shift();
                inProgress++;
                func()
                    .then(res => {
                        inProgress--;
                        result[i] = res;
                        tick();
                    })
                    .catch(err => {
                        error = err;
                        reject(err);
                    });
            }

            if (inProgress === 0 && funcsQueue.length === 0) {
                resolve(result);
            }
        }
        tick();
    });
};

module.exports = {throttlePromises};
