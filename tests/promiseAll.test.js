const {promiseAll} = require("../services/promiseAll");
jest.mock("../services/log");

describe('promiseAll', () => {
    const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 500));
    const promise2 = () => new Promise(resolve => setTimeout(() => resolve(5), 2000));
    const promise3 = () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 1000));

    let mock;
    beforeEach(() => {
        mock = jest.spyOn(console, 'log');
        require("../services/__mocks__/log");
    });

    afterEach(() => {
        mock.mockRestore();
    })
    it('returns an array of results for both resolved promises', () => {
        const res = [1, 5];
        const promise = promiseAll([promise1, promise2]);
        return expect(promise).resolves.toEqual(res);

    });
    it('returns an array of results for both resolved promises in the order promises were called', () => {
        const res = [5, 1];
        const promise = promiseAll([promise2, promise1]);

        return promise.then(result => {
            expect(result).toEqual(res);
            expect(console.log.mock.calls[2][0]).toContain("resolved promise index: 1, res: 1");
        });
    });
    it('returns an Error after getting a promise rejecting despite some other promises got resolved', () => {
        const err = "Error";
        const promise = promiseAll([promise2, promise3, promise1]);

        return promise.catch(error => {
            expect(error).toBe(err);
            expect(console.log.mock.calls[3][0]).toContain("resolved promise index: 2, res: 1");
            expect(console.log.mock.calls[4][0]).toContain("rejected promise index: 1, err: Error");
        });
    });
});