const {arrFlat} = require("../services/arrFlat");
describe('arrFlat', () => {
    it('returns same array when depth=0 is given', () => {
        const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
        const depth = 0;
        expect(arrFlat(arr, depth)).toEqual(arr);
    });
    it('removes 1 level of nesting when depth=1 is given', () => {
        const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
        const depth = 1;
        const res = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15];
        expect(arrFlat(arr, depth)).toEqual(res);
    });
    it('returns flat array when given depth equals array depth level', () => {
        const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
        const depth = 2;
        const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        expect(arrFlat(arr, depth)).toEqual(res);
    });
    it('returns flat array when given depth exceeds array depth level', () => {
        const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
        const depth = 3;
        const res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        expect(arrFlat(arr, depth)).toEqual(res);
    });
    it('returns empty array when empty array is given', () => {
        const arr = [];
        const depth = 3;
        expect(arrFlat(arr, depth)).toEqual(arr);
    });
});