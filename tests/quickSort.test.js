const {quickSort} = require("../services/quickSort");
describe('mergeSort', () => {
    it('returns expected result given an array of different values', () => {
        const a = [4, 2, 100, 99, 10000, -1, 99, 2];
        quickSort(a);
        expect(a).toEqual([-1, 2, 2, 4, 99, 99, 100, 10000]);
    });

    it('returns same array given an array of single value', () => {
        const a = [1];
        quickSort(a);
        expect(a).toEqual([1]);
    });
});