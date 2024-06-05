const {log} = require("./log");

const binarySearchUnique = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    log(`arr: ${JSON.stringify(arr)}, target: ${target}, left: ${leftIndex}, right: ${rightIndex}`);

    while (leftIndex <= rightIndex) {
        const middleIndex =  Math.round((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] === target) {
            log(`exact match index: ${middleIndex}`)
            return middleIndex;
        } else if (arr[middleIndex] > target) {
            rightIndex = middleIndex;
            log(`move left, new right index: ${rightIndex}`);
        } else if (arr[middleIndex] < target) {
            leftIndex = middleIndex;
            log(`move right, new left index: ${leftIndex}`);
        }
        if (rightIndex - leftIndex <= 1) {
            return arr.indexOf(target);
        }
    }
};

module.exports = {binarySearchUnique};