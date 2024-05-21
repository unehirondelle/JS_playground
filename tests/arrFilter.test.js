const {arrFilter} = require("../services/arrFilter");
describe('arrFilter', () => {
    it('returns elements when array includes elements matching the callback', () => {
        const arr = [0, 10, 20, 30];
        const cb = n => n > 10;
        expect(arrFilter(arr, cb)).toEqual([20, 30]);
    });
    it('returns elements when array includes elements matching the callback with index condition', () => {
        const arr = [1, 2, 3];
        const cb = (n, i) => i === 0;
        expect(arrFilter(arr, cb)).toEqual([1]);
    });
    it('returns empty array when no elements matching cb', () => {
        const arr = [-2, -1, 0, 1, 2];
        const cb = n => n === 5
        expect(arrFilter(arr, cb)).toEqual([]);
    });
    it('returns empty array when no array is given', () => {
        let arr;
        const cb = n => n > 0;
        expect(arrFilter(arr, cb)).toEqual([]);
    });
    it('filters out not-number values', () => {
        const arr = [1, undefined, true, null, "1", {}, [], () => {
        }];
        const cb = n => n + 1;
        expect(arrFilter(arr, cb)).toEqual([1]);
    });
});