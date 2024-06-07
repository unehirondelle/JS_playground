const insertionSort = arr => {
    // for (let i = 1; i < arr.length; i++) {
    //     const el = arr[i];
    //     for (let subIndex = 0; subIndex < i; subIndex++) {
    //         if (arr[subIndex] >= el && (subIndex === 0 || el > arr[subIndex - 1])) {
    //             for (let j = i; j > subIndex; j--) {
    //                 arr[j] = arr[j - 1];
    //             }
    //             arr[subIndex] = el;
    //         }
    //     }
    // }

    for (let i = 1; i < arr.length; i++) {
        for (let subIndex = 0; subIndex < i; subIndex++) {
            const el = arr[i];
            const curr = arr[subIndex];
            if (curr > el) {
                [arr[i], arr[subIndex]] = [arr[subIndex], arr[i]];
            }
        }
    }
};

module.exports = {insertionSort};

