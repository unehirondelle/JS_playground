const curry = (fn) => {
    let nums = [];
    const curried = (...args) => { // args in curried function call
        nums = [...nums, ...args]; // any time we pass arguments in curried function they need to be appended to existing args

        if (fn.length === nums.length) {
            const res = fn(...nums); // result is returned only when curried function has equal amount of arguments as initial
            nums = []; // reset curried function array after result was returned to enable next iteration;
            // otherwise curried func gets more args than allowed by the initial func
            return res;
        }
        return curried; // if curried function has less args than initial function - make another call
    };
    return curried;

    //alternative with recursion - doesn't support next fn call with a missing arg
    // const curried = (...args: any[]) => {
    //     if (args.length >= fn.length) {
    //         return fn(...args);
    //     } else {
    //         console.log('not equal')
    //         return (...newArgs: any[]) => {
    //             console.log("old:", args,"new:", newArgs)
    //             return curried(...args, ...newArgs) // if during initial iteration curried func didn't have enough args to
    //             // execute - recursively call curried function with args from previous iteration and add new args
    //         }
    //     }
    //
    // };
    // return curried;
};

module.exports = {curry};