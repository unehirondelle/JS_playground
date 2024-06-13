const {findSingle} = require("../services/findSingle");
describe('findSingle', () => {
    it('should return a single number form an array', () => {
        expect(findSingle([10, 2, 2, 1, 0, 0, 10])).toBe(1);
    });
    it('should return a single number from an array if it is the last element', () => {
        expect(findSingle([1, 1, 2])).toBe(2);
    });
    it('should return a single negative number', () => {
        expect(findSingle([1, 1, -2])).toBe(-2);
    });
    it('should return a single number from an array if it is the first element', () => {
        expect(findSingle([1, 2, 2])).toBe(1);
    });
    it('should return a single negative number first in the array', () => {
        expect(findSingle([-1, 2, 2])).toBe(-1);
    });
    it('should return a single number given array of numbers', () => {
        expect(findSingle([1, 1, 200, 2, 200])).toBe(2);
    });
    it('should return a single number given an array of multiple numbers', () => {
        expect(findSingle([67, 65, 64, 63, 62, 61, 60, -60, 59, 67, 65, 64, 63, 62, 61, 60, -60])).toBe(59);
    });
});