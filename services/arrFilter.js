const arrFilter = (arr, fn) => {
    const result = [];

    for (const i in arr) {
        if (typeof (arr[i]) === 'number' && Boolean(fn(arr[i], Number(i)))) {
            result.push(arr[i])
        }
    }

    return result;
};

exports.arrFilter = arrFilter;
