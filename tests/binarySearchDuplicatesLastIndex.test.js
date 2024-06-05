const {binarySearchDuplicatesLastIndex} = require("../services/binarySearchDuplicatesLastIndex");
describe('binarySearchDuplicatesLastIndex', () => {
    it('returns expected index for target with duplicates', () => {
        expect(binarySearchDuplicatesLastIndex([1, 2, 3, 4, 4, 4, 4, 100, 1000, 10000], 4)).toBe(6);
    });
    it('returns expected index for target in array of same elements', () => {
        expect(binarySearchDuplicatesLastIndex([1, 1, 1], 1)).toBe(2);
    });
    it('returns -1 for non-existing element', () => {
        expect(binarySearchDuplicatesLastIndex([100, 1000, 1000], 1)).toBe(-1);
    });
});