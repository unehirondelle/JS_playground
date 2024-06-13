const once = (fn) => {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn.call(this,...args);
        }
        return result
    }

    //alternative
    // return (...args: any[]) => {
    //     if (!called) {
    //         called = true;
    //         return fn.apply(this, args); // applies context to the call in case the outer function also called with apply
    //         // or belongs to a class - to ensure the inner function has access to the same context
    //     }
    // }
};

module.exports = {once};


