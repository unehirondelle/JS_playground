const {isObjectEmpty} = require("../services/isObjectEmpty");
describe('isObjectEmpty', () => {
    it('returns true for an empty object', () => {
        const obj = {};
        expect(isObjectEmpty(obj)).toBe(true);
    });
    it('returns false for an object with a defined field', () => {
        const obj = {a: 1};
        expect(isObjectEmpty(obj)).toBe(false);
    });
    it('returns false for an object with a null field', () => {
        const obj = {a: null};
        expect(isObjectEmpty(obj)).toBe(false);
    });
    it('returns false for an object with undefined field', () => {
        const obj = {a: undefined};
        expect(isObjectEmpty(obj)).toBe(false);
    });
    it('returns true for an empty array', () => {
        const obj = [];
        expect(isObjectEmpty(obj)).toBe(true);
    });
    it('returns false for an array with a value', () => {
        const obj = [1];
        expect(isObjectEmpty(obj)).toBe(false);
    });
    it('returns true for null', () => {
        const obj = null;
        expect(isObjectEmpty(obj)).toBe(true);
    });
});
