const {arrReduce} = require("../services/arrReduce");

describe('arrReduce', () => {
    it('returns added array elements', () => {
        const arr = [1, 2, 3, 4];
        const cb = (accum, curr) => accum + curr
        const init = 0;
        expect(arrReduce(arr, cb, init)).toBe(10);
    });
    it('returns correct result when cb includes + and * operations', () => {
        const arr = [1, 2, 3, 4];
        const cb = (accum, curr) => accum + curr * curr;
        const init = 100;
        expect(arrReduce(arr, cb, init)).toBe(130);
    });
    it('returns init number when empty array is given', () => {
        const arr = [];
        const cb = (accum, curr) => accum + curr
        const init = 100;
        expect(arrReduce(arr, cb, init)).toBe(100);
    });
    it('returns NaN when array has not number elements', () => {
        const arr = [1, 2, 3, 4, null, 5];
        const cb = (accum, curr) => accum + curr
        const init = 0;
        expect(arrReduce(arr, cb, init)).toBe(NaN);
    });
});