const intersectArrays = (arr1, arr2) => {
    let cursor1 = 0;
    let cursor2 = 0;

    const result = [];

    while (cursor1 < arr1.length && cursor2 < arr2.length) {
        if (arr1[cursor1] === arr2[cursor2]) {
            result.push(arr1[cursor1]);
            cursor1++;
            cursor2++;
        } else if (arr1[cursor1] < arr2[cursor2]) {
            cursor1++;
        } else {
            cursor2++;
        }
    }

    return result;
};

module.exports = {intersectArrays};