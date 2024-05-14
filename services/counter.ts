export const createCounter = (n: number) => {
    return () => {
        return n++;
    };
};

export const createCounterII = (init: number) => {
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
}