Array.prototype.last = function () {
    if (this.length > 0) {
        return this[this.length - 1];
    }
    return -1;
};

console.log(new Array(null, {}, 3).last()) //3
console.log(new Array().last()) //-1