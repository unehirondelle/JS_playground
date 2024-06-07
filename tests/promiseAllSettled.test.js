const {promiseAllSettled} = require("../services/promiseAllSettled");

describe('promiseAll', () => {
    const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 500));
    const promise2 = () => new Promise(resolve => setTimeout(() => resolve(5), 2000));
    const promise3 = () => new Promise((resolve, reject) => setTimeout(() => reject('Error'), 1000));
    const promise4 = () => new Promise((resolve, reject) => setTimeout(() => reject('Error2'), 2500));

    it('returns an array of results for both resolved promises', () => {
        const res = [{status: 'fulfilled', value: 1}, {status: 'fulfilled', value: 5}];
        const promise = promiseAllSettled([promise1(), promise2()]);
        return expect(promise).resolves.toEqual(res);

    });
    it('returns an array of results for both resolved promises in the order promises were called', () => {
        const res = [{status: 'fulfilled', value: 5}, {status: 'fulfilled', value: 1}];
        const promise = promiseAllSettled([promise2(), promise1()]);

        return expect(promise).resolves.toEqual(res);
    });
    it('returns an array of results and errors after processing all promises', () => {
        const res = [{status: 'fulfilled', value: 5}, {status: 'rejected', reason: 'Error'}, {
            status: 'fulfilled',
            value: 1
        }];
        const promise = promiseAllSettled([promise2(), promise3(), promise1()]);

        return expect(promise).resolves.toEqual(res);
    });
    it('returns an array of results and errors after processing all promises when last one is rejected', () => {
        const res = [{status: 'fulfilled', value: 5}, {status: 'rejected', reason: 'Error'}, {
            status: 'fulfilled',
            value: 1
        }, {status: 'rejected', reason: 'Error2'}];
        const promise = promiseAllSettled([promise2(), promise3(), promise1(), promise4()]);

        return expect(promise).resolves.toEqual(res);
    });
    it('returns [] given [] of promises', () => {
        const promise = promiseAllSettled([]);

        return expect(promise).resolves.toEqual([]);
    });
    it('returns an array of results and errors after when some promises are values', () => {
        const res = [
            {status: 'fulfilled', value: 1},
            {status: 'fulfilled', value: 2},
            {status: 'fulfilled', value: 4},
            {status: 'fulfilled', value: 5},
            {status: 'rejected', reason: 'Error'},
            {status: 'fulfilled', value: 1},
            {status: 'rejected', reason: 'Error2'}
        ];
        const promise = promiseAllSettled([1, 2, Promise.resolve(4), promise2(), promise3(), promise1(), promise4()]);

        return expect(promise).resolves.toEqual(res);
    });
});