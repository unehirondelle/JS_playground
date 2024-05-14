export const curry = (fn: (...args: any[]) => void) => {
    return function innerCurry(...innerArgs: any[]) {
        if (innerArgs.length >= fn.length) {
            return fn(...innerArgs)
        }
        return (...args2: any[]) => innerCurry(...innerArgs, ...args2);
    }
}