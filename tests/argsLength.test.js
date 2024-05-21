const {argsLength} = require("../services/argsLength");

describe('argsLength', () => {
   it('returns 2 given 2 arguments', () => {
       expect(argsLength(1, 2)).toBe(2);
   });
    it('returns 1 given an array with 2 arguments', () => {
        expect(argsLength([1, 2])).toBe(1);
    });
    it('returns 1 given an empty array', () => {
        expect(argsLength([])).toBe(1);
    });
    it('returns 0 given no args', () => {
        expect(argsLength()).toBe(0);
    });
    it('returns 1 given an undefined argument', () => {
        expect(argsLength(undefined)).toBe(1);
    });
    it('returns 1 given a null argument', () => {
        expect(argsLength(null)).toBe(1);
    });
});