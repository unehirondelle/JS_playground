const arrMap = (arr, fn) => {
    const newArr = [];

    arr.forEach((el, i) => newArr.push(fn(el, i)));

    return newArr;

    //alternative
    // const newArr = new Array(arr.length);
    //
    // arr.forEach((el, i) => newArr[i] = fn(el, i));
    //
    // return newArr;
};

module.exports.arrMap = arrMap;