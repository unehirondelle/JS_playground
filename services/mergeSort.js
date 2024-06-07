const mergeSort = arr => {
    if (arr.length < 2) {
        return;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex);

    mergeSort(leftArr);
    mergeSort(rightArr);

    let leftArrCursor = 0;
    let rightArrCursor = 0;

    while (leftArrCursor < leftArr.length || rightArrCursor < rightArr.length) {
        if (rightArrCursor === rightArr.length || (leftArrCursor < leftArr.length && leftArr[leftArrCursor] <= rightArr[rightArrCursor])) {
            arr[leftArrCursor + rightArrCursor] = leftArr[leftArrCursor++];
        } else {
            arr[leftArrCursor + rightArrCursor] = rightArr[rightArrCursor++];
        }
    }
};

module.exports = {mergeSort};