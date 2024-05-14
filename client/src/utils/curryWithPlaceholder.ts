export const curryWithPlaceholder = (fn: (...args: any[]) => void) => {
    return function innerCurry(...innerArgs: any[]) {
        const sanitizedArgs = innerArgs.slice(0, fn.length);
        const hasPlaceholder = sanitizedArgs.includes(curryWithPlaceholder.placeholder);
        if (sanitizedArgs.length === fn.length && !hasPlaceholder) {
            return fn(...sanitizedArgs)
        }

        return (...args: any[]) => {
            const filteredInnerArgs = innerArgs.map(arg => arg === curryWithPlaceholder.placeholder ? args.shift() : arg);
            return innerCurry(...filteredInnerArgs, ...args)
        };
    }
}


curryWithPlaceholder.placeholder = Symbol()