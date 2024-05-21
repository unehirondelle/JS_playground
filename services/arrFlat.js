const arrFlat = (arr, n) => {
    const res = [];

    const helper = (arr, depth) => {
        for (const val of arr) {
            if (typeof val === 'object' && depth < n) {
                helper(val, depth + 1);
            } else {
                res.push(val);
            }
        }
        return res;
    }

    return helper(arr, 0);
};

module.exports.arrFlat = arrFlat;

// console.log(arrFlat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)) //[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// console.log(arrFlat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)) //[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
// console.log(arrFlat([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]