const {curry} = require("../services/curry");
describe('curry', () => {
    it('returns result from a curried function where all args exist', () => {
        const fn = (a, b) => a + b;
        const csum = curry(fn);
        const res = csum(1)(2);
        expect(res).toBe(3);
    });
    it('returns result from a curried function where all args exist', () => {
        const fn = (a, b, c) => a + b + c;
        const csum = curry(fn);
        const res = csum(1, 2)(3);
        expect(res).toBe(6);
    });
    it('calls fn only 1 time, no matter how many times curried function is called', () => {
        const fn = (a, b, c) => a + b + c;
        const mock = jest.fn(fn);
        const csum = curry(mock);
        const res = csum(1)(1)(1);
        expect(mock).toBeCalledTimes(1);
    });
});