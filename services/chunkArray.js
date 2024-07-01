const chunkArray = (arr, size) => {
    // const res = [];
    //
    // let subarr = [];
    //
    // arr.forEach(el => {
    //     subarr.push(el);
    //     if (subarr.length === size) {
    //         res.push(subarr);
    //         subarr = [];
    //     }
    // });
    // if (subarr.length > 0) {
    //     res.push(subarr);
    // }
    //
    // return res;

    //alternative
    if (size < 0) {
        throw new Error('array size should be a positive number');
    }

    const res = [];

    if (size > 0) {
        for (let i = 0; i < arr.length; i += size) {
            res.push(arr.slice(i, i + size));
        }
    }

    return res;
};

module.exports.chunkArray = chunkArray;
//
// const fnWithErr = () => {
//     try {
//         chunkArray([8, 5, 3, 2, 6], -6)
//     } catch (e) {
//         return e;
//     }
// }
// console.log(fnWithErr()); //[[8,5,3,2,6]]
// console.log(chunkArray([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
// console.log(chunkArray([1, 9, 6, 3, 2], 3)); // [[1,9,6], [3,2]]
// console.log(chunkArray([8, 5, 3, 2, 6], 6)); //[[8,5,3,2,6]]
// console.log(chunkArray([], 1));//[]
