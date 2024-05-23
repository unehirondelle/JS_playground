const memoize = (fn) => {
    const cache = {}

    return (...args) => {
        const key = JSON.stringify(args);

        if (!(key in cache)) {
            cache[key] = fn.apply(this, args);
        }
        return cache[key];
    }
};

module.exports = {memoize};