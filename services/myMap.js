Array.prototype.myMap = function (...args) {
    if (typeof args[0] !== 'function') {
        throw Error();
    }

    const [fn, thisObj] = args;

    const newArr = Array(this.length);

    this.forEach((el, i) => newArr.splice(i, 1, fn.call(thisObj, el, i, this)));

    return newArr;
}

module.exports = {Array}