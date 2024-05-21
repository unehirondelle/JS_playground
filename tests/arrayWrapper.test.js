const {ArrayWrapper} = require("../services/arrayWrapper");

describe('arrayWrapper', () => {
    describe('valueOf', () => {
        it('returns added array values when all values are numbers', () => {
            const nums = [1, 2, 3, 4];
            expect(new ArrayWrapper(nums).valueOf()).toBe(10)
        });
        it('returns 0 given an empty array', () => {
            const nums = [];
            expect(new ArrayWrapper(nums).valueOf()).toBe(0)
        });
        it('returns NaN when array has not number elements', () => {
            const nums = [[1, 2], [3, 4]];
            expect(new ArrayWrapper(nums).valueOf()).toBe(NaN);
        });
        it('returns NaN when no array is given', () => {
            expect(new ArrayWrapper().valueOf()).toBe(NaN);
        });
    });

    describe('toString', () => {
        it('returns a string of a given array', () => {
            const nums = [1, 2];
            expect(new ArrayWrapper(nums).toString()).toBe('[1,2]');
        });
        it('returns "[]" given an empty array', () => {
            const nums = [];
            expect(new ArrayWrapper(nums).toString()).toBe('[]');
        });
        it('returns "[]" when no array is given', () => {
            const nums = [];
            expect(new ArrayWrapper(nums).toString()).toBe('[]');
        });
    });
});

