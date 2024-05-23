const cancellableTimer = (fn, args, t) => {
    const timer = setTimeout(() => fn.apply(null, args), t);
    //null tells to execute the fn in global scope vs scope of some other object - we're calling a fn defined in the global scope

    return () => {
        clearTimeout(timer);
    };
};

const cancellableInterval = (fn, args, t) => {
    const fnCall = () => {
        fn.apply(null, args);
    };

    fnCall();

    const interval = setInterval(fnCall, t);

    return () => {
        clearInterval(interval);
    }
};

module.exports = {cancellableInterval, cancellableTimer};