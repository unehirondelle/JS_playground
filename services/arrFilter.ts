export const arrFilter = (arr: any[], fn: (a: any, b: number) => any) => {
    const result: any[] = [];

    for (const i in arr) {
        if (Boolean(fn(arr[i], Number(i)))) {
            result.push(arr[i])
        }
    }

    return result;
};