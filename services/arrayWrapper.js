const ArrayWrapper = function (nums) {
    this.nums = nums;
};

exports.ArrayWrapper = ArrayWrapper;

ArrayWrapper.prototype.valueOf = function () {
    if (Array.isArray(this.nums)) {
        return this.nums.reduce((n, accum) => {
            if (typeof accum === 'number') {
                return n + accum
            } else {
                return NaN;
            }
        }, 0);
    } else {
        return NaN;
    }
}

ArrayWrapper.prototype.toString = function () {
    return `[${String(this.nums)}]`;
}