const binarySearchDuplicatesFirstIndex = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

        if (arr[middleIndex] === target) {
            if (arr[middleIndex - 1] !== target) {
                return middleIndex;
            }
            rightIndex = middleIndex - 1;
        } else if (arr[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    return -1;
};

module.exports = {binarySearchDuplicatesFirstIndex};