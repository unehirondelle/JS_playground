const {memoize} = require("../services/memoize");
describe('memoize', () => {
    it('only returns the result of last call', () => {
        const sum = (a, b) => a + b;
        const memoizedSum = memoize(sum);
        memoizedSum(2, 2);
        const res = memoizedSum(1, 2);
        expect(res).toBe(3);
    });
    it('ignores second call with same args', () => {
        const sum = (a, b) => a + b;
        const mock = jest.fn(sum);
        const memoizedSum = memoize(mock);
        memoizedSum(2, 2);
        memoizedSum(2, 2);
        expect(mock).toBeCalledTimes(1);
        mock.mockRestore();
    });
    it('returns result of memoized call without calling a fn again', () => {
        const sum = (a, b) => a + b;
        const mock = jest.fn(sum);
        const memoizedSum = memoize(mock);
        memoizedSum(2, 2);
        memoizedSum(1, 2);
        expect(mock).toBeCalledTimes(2);
        const calculatedRes = memoizedSum(2, 2);
        const res = 4;
        expect(mock).toBeCalledTimes(2);
        expect(calculatedRes).toBe(res);
        mock.mockRestore();
    });
});