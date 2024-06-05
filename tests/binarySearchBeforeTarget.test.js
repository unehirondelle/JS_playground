const {binarySearchBeforeTarget} = require("../services/binarySearchBeforeTarget");
describe('binarySearchBeforeTarget', () => {
    it('returns expected element when exists', () => {
        expect(binarySearchBeforeTarget([1, 2, 3, 4, 4, 4, 4, 100, 1000, 10000], 4)).toBe(3)
    });
    it('returns undefined when array consists of target elements', () => {
        expect(binarySearchBeforeTarget([1, 1, 1], 1)).toBe(undefined);
    });
    it('returns undefined when target is not found', () => {
        expect(binarySearchBeforeTarget([100, 1000, 1000], 1)).toBe(undefined);
    });
});