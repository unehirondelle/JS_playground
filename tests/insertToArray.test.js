const {insertToArray} = require("../services/insertToArray");
describe('insertToArray', () => {
    it('adds element to right part of an asc sorted array of unique values', () => {
        expect(insertToArray([1, 2, 3, 5, 6], 4)).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('adds element to left part of asc sorted array of unique values', () => {
        expect(insertToArray([1, 3, 4, 5, 6], 2)).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('adds element to the right of a single element array', () => {
        expect(insertToArray([1], 2)).toEqual([1, 2]);
    });
    it('adds element to the left of a single element array', () => {
        expect(insertToArray([2], 1)).toEqual([1, 2]);
    });
    it('adds element in the middle of 2 elements array', () => {
        expect(insertToArray([2, 4], 3)).toEqual([2, 3, 4]);
    });
    it('adds duplicated element right after the last of its dups', () => {
        expect(insertToArray([2, 2, 4], 2)).toEqual([2, 2, 2, 4]);
    });
    it('adds duplicated element to the end of array of dups', () => {
        expect(insertToArray([2, 2, 2], 2)).toEqual([2, 2, 2, 2]);
    });
    it('adds element when some consequent elements are missing', () => {
        expect(insertToArray([1, 2, 5, 6, 7, 20, 40, 100], 15)).toEqual([1, 2, 5, 6, 7, 15, 20, 40, 100]);
    });
});