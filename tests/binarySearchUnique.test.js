const {binarySearchUnique} = require("../services/binarySearchUnique");
describe('binarySearchUnique', () => {
    it('returns existing el of array of even length, target on the left', () => {
        expect(binarySearchUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toBe(1);
    });
    it('returns existing el of array of odd length, target on the left', () => {
        expect(binarySearchUnique([1, 2, 3, 4, 5], 3)).toBe(2);
    });
    it('returns -1 for non-existing el, target on the left', () => {
        expect(binarySearchUnique([1, 2, 4, 5, 6], 3)).toBe(-1);
    });
    it('returns existing el of array of even length, target on the right', () => {
        expect(binarySearchUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)).toBe(8);
    });
    it('returns existing el of array of odd length, target on the right', () => {
        expect(binarySearchUnique([1, 2, 3, 4, 5], 4)).toBe(3);
    });
    it('returns -1 for non-existing el, target on the left', () => {
        expect(binarySearchUnique([1, 2, 4, 5, 7], 6)).toBe(-1);
    });
    it('returns 0 when target is first element', () => {
        expect(binarySearchUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toBe(0);
    });
    it('returns -1 when element is out of array', () => {
        expect(binarySearchUnique([1, 2, 3, 4, 5], 6)).toBe(-1);
    });
    it('returns element from a single array', () => {
        expect(binarySearchUnique([1], 1)).toBe(0);
    });
});