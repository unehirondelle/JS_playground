const timeLimit = (fn, t) => {

    return async (...args) => {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject("Time Limit Exceeded"), t);

            fn(...args)
                .then(response => resolve(response))
                .catch(e => reject(e))
                .finally(() => clearTimeout(timer));
        });
    };
};

module.exports = {timeLimit};