const debounce = (fn, t) => {
    let timerId;

    return (...args) => {
        clearTimeout(timerId); // it doesn't hurt when timerId is undefined neither when the function was already completed

        timerId = setTimeout(() => fn(...args), t);

    };
};

module.exports = {debounce};