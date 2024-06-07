const {bubbleSort} = require("../services/bubbleSort");
describe('bubbleSort', () => {
    it('returns expected result given an array of different values', () => {
        const a = [4, 2, 100, 99, 10000, -1, 99, 2];
        bubbleSort(a);
        expect(a).toEqual([-1, 2, 2, 4, 99, 99, 100, 10000]);
    });

    it('returns same array given an array of single value', () => {
        const a = [1];
        bubbleSort(a);
        expect(a).toEqual([1]);
    });
    it('returns expected when first element is less than others', () => {
        const a = [5, 8, 6, 7];
        bubbleSort(a);
        expect(a).toEqual([5, 6, 7, 8]);
    });
    it('returns expected with 1 swap required', () => {
        const a = [5, 6, 8, 7];
        bubbleSort(a);
        expect(a).toEqual([5, 6, 7, 8]);
    });
});