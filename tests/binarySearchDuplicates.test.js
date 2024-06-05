const {binarySearchDuplicatesFirstIndex} = require("../services/binarySearchDuplicatesFirstIndex");
describe('binarySearchDuplicatesFirstIndex', () => {
    it('returns expected index for target with duplicates', () => {
        expect(binarySearchDuplicatesFirstIndex([1, 2, 3, 4, 4, 4, 4, 100, 1000, 10000], 4)).toBe(3);
    });
    it('returns expected index for target without duplicates', () => {
        expect(binarySearchDuplicatesFirstIndex([1, 2, 3, 4, 4, 4, 4, 100, 1000, 10000], 2)).toBe(1);
    });
    it('returns expected index for target in array of same elements', () => {
        expect(binarySearchDuplicatesFirstIndex([1, 1, 1], 1)).toBe(0);
    });
    it('returns -1 for non-existing element', () => {
        expect(binarySearchDuplicatesFirstIndex([100, 1000, 1000], 1)).toBe(-1);
    });
});