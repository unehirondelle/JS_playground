Array.prototype.groupBy = function (fn) {
    // group by keys
    const res = {};

    for (const value of this) {
        const key = fn(value);
        if (!Object.hasOwn(res, key)) {
            res[key] = [];
        }

        res[key].push(value);
    }

    return res;
};

module.exports = {Array};

// console.log(new Array({"id": "1"},
//     {"id": "1"},
//     {"id": "2"}).groupBy(function (item) {
//     return item.id;
// }));
// // {
// //     "1":[{"id": "1"}, {"id": "1"}],
// //     "2":[{"id": "2"}]
// // }
// console.log(new Array([1, 2, 3],
//     [1, 3, 5],
//     [1, 5, 9]).groupBy(function (list) {
//     return String(list[0]);
// }));
// // {
// //     "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// // }
//
// console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).groupBy(function (n) {
//     return String(n > 5);
// }));
// // {
// //     "true": [6, 7, 8, 9, 10],
// //     "false": [1, 2, 3, 4, 5]
// // }