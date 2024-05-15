export const compose = (funcs: ((x: any) => any)[]) => {
    // return (x: any) => {
    //     for (const fn of funcs.reverse()) {
    //         x = fn(x)
    //     }
    //     return x;
    // };

    // alternative
    return (x: any) => {
        const fn = (res: any, f: (a: any) => any) => f(res);
        return funcs.reduceRight(fn, x)
    };
};

// const fn = compose([x => x + 1, x => 2 * x])
// fn(4) // 9