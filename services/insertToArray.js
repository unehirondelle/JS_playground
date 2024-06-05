const {log} = require("./log");
const insertToArray = (arr, element) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let counter = 0;
    while (leftIndex <= rightIndex) {
        const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        counter++;
        log(`tick#: ${counter}`);
        if (arr[middleIndex] === element) {
            if (arr[middleIndex + 1] !== element) {
                const rest = arr.splice(middleIndex);
                arr.push(element);
                log('----END----');
                return [...arr, ...rest];
            }
            leftIndex = middleIndex + 1;
        } else if (arr[middleIndex] > element) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }

        if (rightIndex - leftIndex <= 1) {
            let rest;
            if (arr[leftIndex] > element) {
                rest = arr.splice(leftIndex);
            } else if (arr[rightIndex] < element) {
                rest = arr.splice(rightIndex + 1);
            } else {
                rest = arr.splice(rightIndex);
            }
            arr.push(element);
            log('----END----');
            return [...arr, ...rest];
        }
    }
};

module.exports = {insertToArray};