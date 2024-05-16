export const debounce = (fn: Function, t: number): Function => {
    let timerId: any;

    return (...args: any[]) => {
        clearTimeout(timerId); // it doesn't hurt when timerId is undefined neither when the function was already completed

        timerId = setTimeout(() => fn(...args), t);

    };
};