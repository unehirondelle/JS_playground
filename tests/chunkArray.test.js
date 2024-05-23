const {chunkArray} = require("../services/chunkArray");
describe('chunkArray', () => {
    it('throws an error given negative size', () => {
        const arr = [1, 2, 3, 4, 5];
        const size = -6;
        expect(() => chunkArray(arr, size)).toThrow();
    });
    it('returns array of arrays given size under array length when array/size returns an integer', () => {
        const arr = [1, 2, 3, 4, 5];
        const size = 1;
        expect(chunkArray(arr, size)).toEqual([[1], [2], [3], [4], [5]]);
    });
    it('returns array of arrays given size under array length when array/size returns a decimal', () => {
        const arr = [1, 2, 3, 4, 5];
        const size = 3;
        expect(chunkArray(arr, size)).toEqual([[1, 2, 3], [4, 5]]);
    });
    it('returns array nested in itself given size exceeds array length', () => {
        const arr = [1, 2, 3, 4, 5];
        const size = 6;
        expect(chunkArray(arr, size)).toEqual([[1, 2, 3, 4, 5]]);
    });
    it('returns empty array given an empty array', () => {
        const arr = [];
        const size = 6;
        expect(chunkArray(arr, size)).toEqual([]);
    });
});