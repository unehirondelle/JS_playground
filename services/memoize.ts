export const memoize = (fn: (...args: any[]) => any) => {
    const cache: { [key: string]: any } = {}

    return (...args: any[]) => {
        const key = JSON.stringify(args);

        if (!(key in cache)) {
            cache[key] = fn.apply(this, args);
        }
        return cache[key];
    }
};