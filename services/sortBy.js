const sortBy = (arr, fn, mode) => {
    // classic - subtraction-based
    // return arr.sort((a, b) => fn(a) - fn(b));

    //comparison-based
    return arr.sort((a, b) => {
        const res = fn(a) < fn(b) ? -1 : 1;
        return mode === 'desc' ? -res : res;
    });
};

module.exports = {sortBy};

// console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // [1, 2, 3, 4, 5]
// console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x)); // [{"x": -1}, {"x": 0}, {"x": 1}]
// console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1])); // [[10, 1], [5, 2], [3, 4]]
