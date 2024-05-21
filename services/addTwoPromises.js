const addTwoPromises = async (promise1, promise2) => {
    const result1 = await promise1.then(res => res).catch(e => console.log((e)));
    const result2 = await promise2.then(res => res).catch(e => console.log((e)));

    return result1 + result2;
};

exports.addTwoPromises = addTwoPromises;

// addTwoPromises(
//     new Promise(resolve => setTimeout(() => resolve(2), 20)),
//     new Promise(resolve => setTimeout(() => resolve(5), 60))
// ).then(res => console.log(`res1: ${res}`)); // 7
//
// addTwoPromises(
//     new Promise(resolve => setTimeout(() => resolve(10), 50)),
//     new Promise(resolve => setTimeout(() => resolve(-12), 30))
// ).then(res => console.log(`res2: ${res}`)); // -2