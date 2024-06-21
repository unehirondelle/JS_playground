Array.prototype.myReduce = function (...args) {
    const hasInitialValue = args.length > 1;
    if (args.length === 0 || this.length === 0 && !hasInitialValue) {
        throw Error();
    }
    const reducer = args[0];
    let res = hasInitialValue ? args[1] : this[0];
    for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
        res = reducer(res, this[i], i, this);
    }
    return res;
}

module.exports = {Array};