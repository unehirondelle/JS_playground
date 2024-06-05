const {binarySearchAfterTarget} = require("../services/binarySearchAfterTarget");
describe('binarySearchAfterTarget', () => {
    it('returns expected element when exists', () => {
        expect(binarySearchAfterTarget([1, 2, 3, 4, 4, 4, 4, 100, 1000, 10000], 4)).toBe(100)
    });
    it('returns undefined when array consists of target elements', () => {
        expect(binarySearchAfterTarget([1, 1, 1], 1)).toBe(undefined);
    });
    it('returns undefined when target is not found', () => {
        expect(binarySearchAfterTarget([100, 1000, 1000], 1)).toBe(undefined);
    });
});