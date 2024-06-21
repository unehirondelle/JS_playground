const {mergeSort} = require("./mergeSort");
const mostFrequentlyOccurringChar = (str) => {
    // O(n)  - time, O(n) - memory
    // const map = new Map();
    // const set = new Set();
    // let max = 1;
    //
    // for (const char of str) {
    //     map.set(char, (map.get(char) || 0) + 1);
    //
    //     const occurrences = map.get(char);
    //     if (occurrences === max) {
    //         set.add(char);
    //     } else if (occurrences > max) {
    //         set.clear();
    //         set.add(char);
    //         max = occurrences;
    //     }
    // }
    //
    // return set.size === 1 ? set.values().next().value : Array.from(set);

    //O(log n) - time, O(1) - memory

    const arr = str.split('');
    mergeSort(arr);

    let resArr = [];
    const max = {char: arr[0], occurs: 1};
    const current = {char: arr[0], occurs: 1};

    for (let i = 1; i < arr.length; i++) {
        const char = arr[i];
        const isLast = i === arr.length - 1;
        const isFirst = i === 1;
        if (current.char === char) {
            current.occurs++;
        } else {
            current.char = char;
            current.occurs = 1;
        }

        if (current.char === max.char) {
            max.occurs++;

            if (isFirst) {
                resArr.push(max.char)
            } else {
                resArr.length = 0;
            }
        } else {
            if (current.occurs > max.occurs) {
                if (resArr.length > 0) { // found the char with higher frequency
                    resArr.length = 0;
                }
                max.char = current.char;
                max.occurs = current.occurs;
            } else if (current.occurs === max.occurs) {
                resArr.push(max.char);
                max.char = current.char;
                max.occurs = current.occurs;
                if (isLast) {
                    resArr.push(max.char);
                }
            }
        }
    }

    return resArr.length === 0 ? max.char : resArr.length === 1 ? resArr[0] : resArr;
};

module.exports = {mostFrequentlyOccurringChar};