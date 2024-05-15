export const once = (fn: (...args: any[]) => any) => {
    let called = false

    return (...args: any[]) => {
        if (!called) {
            called = true;
            return fn(...args);
        }
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


