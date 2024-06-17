const {intersectArrays} = require("../services/intersectArrays");
describe('intersectArray', () => {
    it('should return expected given arrays with common elements', () => {
        const result = intersectArrays(
            [1, 2, 2, 3, 4, 4],
            [2, 2, 4, 5, 5, 6, 2000]
        )

        result.sort()
        expect(result).toEqual([2, 2, 4])
    });
    it('should should return [] given empty input', () => {
        const result1 = intersectArrays(
            [1, 2, 2, 3, 4, 4],
            []
        )

        const result2 = intersectArrays(
            [],
            []
        )
        const result3 = intersectArrays(
            [],
            [1, 2, 3]
        )

        expect(result1).toEqual([])
        expect(result2).toEqual([])
        expect(result3).toEqual([])
    });
    it('should return [] given arrays without common elements', () => {
        const result1 = intersectArrays(
            [1, 2, 3, 4, 5],
            [6, 7, 8]
        )

        expect(result1).toEqual([])
    });
    it('should return expected given arrays when one contains another one', () => {
        const result1 = intersectArrays(
            [1, 1, 1, 2, 2, 3, 4, 5],
            [1, 1, 1, 2, 2, 3, 4, 5, 6.7, 8],
        )
        result1.sort()
        expect(result1).toEqual([1, 1, 1, 2, 2, 3, 4, 5])
    });
    it('should return expected given arrays when one has bigger length with duplicated numbers', () => {
        const result1 = intersectArrays(
            [1, 1, 1, 2, 2, 3, 3, 4, 5, 5],
            [1, 1, 2, 2, 5, 5, 5, 7, 7, 7, 7, 7],
        )
        result1.sort()
        expect(result1).toEqual([1, 1, 2, 2, 5, 5])
    });
});