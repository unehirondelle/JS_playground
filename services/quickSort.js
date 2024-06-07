const quickSort = arr => {
    let leftCursor = 0;
    let rightCursor = arr.length - 1;
    const pivot = arr[arr.length - 1]; //can be random

    while (arr[leftCursor] < pivot || arr[rightCursor] > pivot) {
        if (arr[leftCursor] > pivot && pivot < arr[rightCursor]) {
            [arr[leftCursor], arr[rightCursor]] = [arr[rightCursor], arr[leftCursor]];
            leftCursor++;
            rightCursor--;
        } else if (arr[leftCursor] > pivot && pivot > arr[rightCursor]) {
            rightCursor--;
        } else {
            leftCursor++;
        }
    }
};

module.exports = {quickSort};