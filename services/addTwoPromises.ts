export const addTwoPromises = async (promise1:Promise<any>, promise2:Promise<any>) => {
    const result1 = await promise1.then(res => res).catch(e => console.log((e)));
    const result2 = await promise2.then(res => res).catch(e => console.log((e)));

    return result1 + result2;
}