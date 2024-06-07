const {log} = require("./log");
const bubbleSort = arr => {
    // let passed = 0;
    //
    // while (passed < arr.length - 1) {
    //     passed = 0;
    //     let left = 0;
    //     let right = 1;
    //     while (right < arr.length) {
    //         if (arr[left] > arr[right]) {
    //             const storage = arr[left];
    //             arr[left] = arr[right];
    //             arr[right] = storage;
    //         } else {
    //             passed++;
    //         }
    //         left++;
    //         right++;
    //     }
    // }

    const n = arr.length;
    for (let index = 0; index < n; index++) {
        for (let subIdx = 0; subIdx < n - index - 1; subIdx++) {
            //n - index - 1 explanation:
            // -1 as # of swaps is always arr.length -1;
            // -index as each char of an arr is at its final place after index iterations so no need to check it again
            if (arr[subIdx] > arr[subIdx + 1]) {
                [arr[subIdx], arr[subIdx + 1]] = [arr[subIdx + 1], arr[subIdx]];

            }
        }
    }
};

module.exports = {bubbleSort};