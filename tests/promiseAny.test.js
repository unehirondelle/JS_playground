const {promiseAny} = require("../services/promiseAny");

describe('promiseAll', () => {
    const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 500));
    const promise2 = () => new Promise(resolve => setTimeout(() => resolve(5), 2000));
    const promise3 = () => new Promise((resolve, reject) => setTimeout(() => reject("Error1"), 1000));
    const promise4 = () => new Promise((resolve, reject) => setTimeout(() => reject("Error2"), 2000));

    it('returns result of first resolved promise', () => {
        const res = 1;
        const promise = promiseAny([promise1(), promise2()]);
        return expect(promise).resolves.toEqual(res);

    });
    it('returns result of first resolved promise even when it was called after another promise', () => {
        const res = 1;
        const promise = promiseAny([promise2(), promise1()]);
        return expect(promise).resolves.toEqual(res);
    });
    it('returns result of first resolved promise even when some promises are rejected', () => {
        const res = 5;
        const promise = promiseAny([promise3(), promise2()]);
        return expect(promise).resolves.toEqual(res);
    });
    it('rejects when an empty array of promises is passed', () => {
        return expect(() => promiseAny([])).toThrow(new AggregateError(["No Promise passed"]));
    });
    it('throws an Error when all promises got rejected', () => {
        const promise = promiseAny([promise4(), promise3()]);
        return expect(() => promise).rejects.toThrow('Error2,Error1');
    });
});