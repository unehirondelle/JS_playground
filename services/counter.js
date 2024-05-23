const createCounter = (n) => {
    return () => {
        return n++;
    };
};

const createCounterII = (init) => {
    let currentCount = init;

    const increment = () => {
        return ++currentCount;
    };

    const decrement = () => {
        return --currentCount;
    };

    const reset = () => {
        currentCount = init
        return currentCount;
    };

    return {
        increment, decrement, reset
    }
};

module.exports = {createCounter, createCounterII};