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

const createCounterIII = () => {
    let counter = 0;

    return {
        get count() {
            return counter++;
        }
    }
}

module.exports = {createCounter, createCounterII, createCounterIII};

