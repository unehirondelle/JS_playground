const compose = (fns) => {
    // return (x: any) => {
    //     for (const fn of fns.reverse()) {
    //         x = fn(x)
    //     }
    //     return x;
    // };

    // alternative
    return (x) => {
        const fn = (res, f) => f(res);
        return fns.reduceRight(fn, x)
    };
};

module.exports = {compose};

// const fn = compose([x => x + 1, x => 2 * x])
// fn(4) // 9