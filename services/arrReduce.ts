export const arrReduce = (nums: number[], fn: (a: number, b: number) => any, init: number) => {
    let result = init;

    for (const n of nums) {
        result = fn(result, n)
    }

    return result;
};