const {mostFrequentlyOccurringChar} = require("../services/mostFrequentlyOccurringChar");
describe('mostFrequentlyOccurringChar', () => {
    it('should return a single char given a single char str', () => {
        expect(mostFrequentlyOccurringChar('a')).toBe('a')
    });
    it('should return expected non-letter char', () => {
        expect(mostFrequentlyOccurringChar('%^&&*')).toBe('&');
    });
    it('should return expected letter char', () => {
        expect(mostFrequentlyOccurringChar('abcce')).toBe('c');
    });
    it('should return array of chars when found more than one', () => {
        expect(mostFrequentlyOccurringChar('abccee').sort()).toEqual(['c', 'e']);
    });
    it('should return expected from multi type string', () => {
        expect(mostFrequentlyOccurringChar('abcdefghijklmnoopqrstuvwxyz1230009')).toEqual('0');
    });
    it('should return array of chars when found more than one for multi type string ', () => {
        expect(mostFrequentlyOccurringChar('aaabcdefghijklmnoopqrstuvwxyz1230009').sort()).toEqual(['0', 'a']);
    });
    it('should return expected given str of all diff chars', () => {
        expect(mostFrequentlyOccurringChar('123').sort()).toEqual(['1', '2', '3']);
    });
});