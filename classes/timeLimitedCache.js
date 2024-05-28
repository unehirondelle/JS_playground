const TimeLimitedCache = function () {
    this.cache = new Map();
};

exports.TimeLimitedCache = TimeLimitedCache;

TimeLimitedCache.prototype.set = function (key, value, duration) {
    const existingEntry = this.cache.get(key);

    if (existingEntry) {
        clearTimeout(existingEntry.timerId); // clear old timer if a key is reset
    }

    const timerId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {value, timerId});

    return Boolean(existingEntry); // always true if key exists as we assign an object, not just a value number
};

TimeLimitedCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }
    return -1;
};

TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};

// same but with class syntax
// class TimeLimitedCacheClass {
//     cache = new Map(); // constructor isn't needed as class only sets a field in this object
//
//     set(key, value, duration) {
//         const existingEntry = this.cache.get(key);
//
//         if (existingEntry) {
//             clearTimeout(existingEntry.timerId); // clear old timer if a key is reset
//         }
//
//         const timerId = setTimeout(() => {
//             this.cache.delete(key);
//         }, duration);
//
//         this.cache.set(key, {value, timerId});
//
//         return Boolean(existingEntry); // always true if key exists as we assign an object, not just a value number
//     };
//
//     get(key) {
//         if (this.cache.has(key)) {
//             return this.cache.get(key).value;
//         }
//         return -1;
//     };
//
//     count() {
//         return this.cache.size;
//     };
// }