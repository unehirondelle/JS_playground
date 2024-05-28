const throttle = (fn, t) => {
    let isThrottled = false;
    let nextArgs = null; // args state for the next fn call

    const helper = () => {
        isThrottled = false;

        if (nextArgs) { // next fn call after t time passed when fn was triggered during t time
            fn(...nextArgs);
            nextArgs = null; // reset args for the next call to avoid infinite loop
            isThrottled = true; // fn is throttled again to prevent the following call
            setTimeout(helper, t); // unleash the following fn execution after t time passes
        }
    };

    return (...args) => {
        if (isThrottled) {
            nextArgs = args; // set args for the next fn call if fn was triggered before t time passed
        } else {
            fn(...args); // initial fn call
            isThrottled = true;
            setTimeout(helper, t); // unleash next function execution after t time passes
        }
    };
};

module.exports = {throttle};

// const start = Date.now()
// const throttled = throttle((value) => console.log(value, Date.now() - start), 1000);
//
// throttled('log');
// throttled('log');