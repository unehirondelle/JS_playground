const {removeChars} = require("../services/removeChars");
describe('removeChars', () => {
    it('should return empty string given an empty string', () => {
        expect(removeChars('')).toBe('');
    });
    it('should return same string if no chars to remove', () => {
        expect(removeChars('a')).toBe('a');
    });
    it('should return empty string if given string does not have legit chars', () => {
        expect(removeChars('bbb')).toBe('');
    });
    it('should return same string if given string only has legit chars', () => {
        expect(removeChars('ccc')).toBe('ccc');
    });
    it('should return string of only legit chars', () => {
        expect(removeChars('ab')).toBe('a');
    });
    it('should return empty string if did not found pattern to remove', () => {
        expect(removeChars('abc')).toBe('');
    });
    it('should return string matching a pattern', () => {
        expect(removeChars('cabbaabcca')).toBe('caa');
    });
    it('should return expected given a string with chars to remove', () => {
        expect(removeChars('aaaaba')).toBe('aaaaa');
    });
    it('should return a legit char after all patterns removed', () => {
        expect(removeChars('abbbaaccbbaccab')).toBe('a');
    });
    it('should return expected after cleaning all patterns', () => {
        expect(removeChars('cabaaaacccaacccbabaccaa')).toBe('caaa');
    });
});