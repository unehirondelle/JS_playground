const {moveZeros} = require("../services/moveZeros");
describe('moveZeros', () => {
    it('should return [] given an empty array', () => {
        expect(moveZeros([])).toEqual([]);
    });
    it('should return array itself given an array of zeros', () => {
        expect(moveZeros([0, 0, 0])).toEqual([0, 0, 0]);
    });
    it('should return expected given an array with zeros at the beginning', () => {
        const input = [0, 0, 0, 1, 3, 2, 6];
        moveZeros(input);
        expect(input).toEqual([1, 3, 2, 6, 0, 0, 0]);
    });
    it('should return expected given an array with zeros at the end', () => {
        const input = [1, 2, 3, 0, 0, 0, 6];
        moveZeros(input);
        expect(input).toEqual([1, 2, 3, 6, 0, 0, 0,]);
    });
    it('should return expected given an array of mixed zeros and other numbers, some zeros at the end', () => {
        const input = [0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0, 0, 6, 0, 0];
        moveZeros(input);
        expect(input).toEqual([1, 2, 3, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it('should return expected given an array of mixed zeros and other numbers', () => {
        const input = [0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 1, 1, 0, 0, 3];
        moveZeros(input);
        expect(input).toEqual([1, 1, 2, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
});