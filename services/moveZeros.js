const moveZeros = arr => {
    // let iterations = arr.length;
    // for (let i = 0; i < iterations; i++) {
    //     if (arr[i] === 0) {
    //         const [removed] = arr.splice(i, 1);
    //         arr.push(removed);
    //         i--;
    //         iterations--;
    //     }
    // }
    //
    // return arr;

    let left = 0;
    let right = 0;

    while (right < arr.length) {
        if (arr[right] === 0) {
            right++;
        } else {
            arr[left] = arr[right];
            left++;
            right++;
        }
    }
    if (left !== arr.length - 1) {
        for (let i = left; i < arr.length; i++) {
            arr[i] = 0;
        }
    }
    return arr;
};

module.exports = {moveZeros};