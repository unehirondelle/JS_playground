const promisePool = async (fns, n) => {
    // return new Promise(resolve => {
    //     let i = 0; // track current promise index
    //     let inProgress = 0; // track pending promises
    //
    //     const fnResolutionCb = () => {
    //         if (i === fns.length && inProgress === 0) { // no fns to execute and all promises are resolved
    //             resolve();
    //         }
    //
    //         while (i < fns.length && inProgress < n) { // inProgress cannot be over the limit
    //             fns[i++]() // increment current promise index after starting a fn execution
    //                 .then(() => {
    //                     inProgress--; // decrement pending promises tracker upon resolution
    //                     fnResolutionCb();
    //                 }); // promise resolved
    //             inProgress++; // increment pending promises tracker upon starting executing a new one
    //         }
    //     };
    //
    //     fnResolutionCb();
    // });

    // alternative
    let i = 0;

    const callback = async () => {
        if (i === fns.length) {
            return;
        }
        await fns[i++]();
        await callback();
    }

    const nPromises = Array(n).fill(undefined).map(callback); // create an array with n members to allocate
    // enough memory - it'll have n undefined elements, each to be replaced with a result of callback execution

    await Promise.all(nPromises);
};

module.exports = {promisePool};

// const sleep = t => new Promise(res => setTimeout(res, t));
// const fn1 = () => sleep(500);
// const fn2 = () => sleep(400);
// const start = Date.now()
// promisePool([fn1, fn2]).then(() => console.log(Date.now() - start))