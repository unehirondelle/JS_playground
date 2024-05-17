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
    const res = [];

    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }

    return res;
};

console.log(chunkArray([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
console.log(chunkArray([1, 9, 6, 3, 2], 3)); // [[1,9,6], [3,2]]
console.log(chunkArray([8, 5, 3, 2, 6], 6)); //[[8,5,3,2,6]]
console.log(chunkArray([], 1));//[]
