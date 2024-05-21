const {arrMap} = require("../services/arrMap");
describe('arrMap', () => {
    it('returns an array matching cb rule', () => {
        const arr = [1, 2, 3];
        const cb = n => n + 1;
        const res = [2, 3, 4];
        expect(arrMap(arr, cb)).toEqual(res);
    });
    it('returns an array matching cb rule that includes index', () => {
        const arr = [1, 2, 3];
        const cb = (n, i) => n + i;
        const res = [1, 3, 5];
        expect(arrMap(arr, cb)).toEqual(res);
    });
    it('returns an array of equal elements when cb returns a constant', () => {
        const arr = [1, 2, 3];
        const cb = n => 42;
        const res = [42, 42, 42];
        expect(arrMap(arr, cb)).toEqual(res);
    });
    it('returns an empty array when empty array is given', () => {
        const arr = [];
        const cb = n => 42;
        const res = [];
        expect(arrMap(arr, cb)).toEqual(res);
    });
});