const {log} = require("./log");
const promiseAll = (fns) => {
    return new Promise((resolve, reject) => {
        if (fns.length === 0) {
            resolve([]);
        }

        let inProgress = 0;
        const results = Array(fns.length);

        fns.forEach((fn, i) => {
            log(`started promise index: ${i}`);
            inProgress++;
            fn()
                .then((res) => {
                    log(`resolved promise index: ${i}, res: ${res}`);
                    inProgress--;
                    results[i] = res;
                    if (inProgress === 0) {
                        log(`All resolved`);
                        resolve(results);
                    }
                })
                .catch((e) => {
                    log(`rejected promise index: ${i}, err: ${e}`);
                    reject(e);
                });
        });
    });
};

module.exports = {promiseAll};

const date = new Date();

const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 500));
const promise2 = () => new Promise(resolve => setTimeout(() => resolve(5), 2000));
const promise3 = () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 1000));
// promise1().then(console.log).catch(console.log);
// promise2().then(console.log).catch(console.log);


// const promise = promiseAll([promise1, promise3]);
// promise.then(console.log).catch(console.log);
// log("LALA");