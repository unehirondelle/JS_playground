const {promiseAllSettled} = require("../services/promiseAllSettled");
const {promiseRace} = require("../services/promiseRace");

describe('promiseAll', () => {
    const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 500));
    const promise2 = () => new Promise(resolve => setTimeout(() => resolve(5), 2000));
    const promise3 = () => new Promise((resolve, reject) => setTimeout(() => reject('Error'), 1000));

    it('returns value of a fastest promise', () => {
        const res = 1;
        const promise = promiseRace([promise1(), promise2()]);
        return expect(promise).resolves.toEqual(res);

    });
    it('returns value of the fastest promise even if it was called the last', () => {
        const res = 1;
        const promise = promiseRace([promise2(), promise1()]);

        return expect(promise).resolves.toEqual(res);
    });
    it('rejects when error occurs', () => {
        const res = 'Error';
        const promise = promiseRace([promise2(), promise3()]);

        return expect(promise).rejects.toEqual(res);
    });
    it('returns undefined given [] of promises', () => {
        const promise = promiseRace([]);

        return expect(promise).resolves.toEqual(undefined);
    });
    it('returns the sync value', () => {
        const res = 2;
        const promise = promiseRace([promise2(), promise3(), 2, promise1()]);

        return expect(promise).resolves.toEqual(res);
    });
});