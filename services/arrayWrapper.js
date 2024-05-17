const ArrayWrapper = function (nums) {
    this.nums = nums;
}

Array.prototype.valueOf = function () {
    return this.nums.reduce((n, accum) => n + accum, 0);
}

Array.prototype.toString = function () {
    return `[${String(this.nums)}]`;
}