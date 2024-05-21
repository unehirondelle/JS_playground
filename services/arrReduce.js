const arrReduce = (nums, fn, init) => {
    let result = init;

    for (const n of nums) {
        if (typeof n === 'number') {
            result = fn(result, n);
        } else {
            result = NaN;
        }
    }

    return result;
};

module.exports.arrReduce = arrReduce;