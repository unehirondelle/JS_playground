function memo(func, resolver) {
    const cache = new Map();

    const getResult = function (key, ...args) {
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func.apply(this, args);
        cache.set(key, result);
        return result;
    }

    return function (...args) {
        let key;
        if (resolver) {
            key = resolver(...args);

        } else {
            key = JSON.stringify(args);
        }
        return getResult.bind(this, key, ...args)();
    };
}

module.exports = {memo};