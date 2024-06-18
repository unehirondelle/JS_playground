const {romanToInteger} = require("../services/romanToInteger");
describe('romanToInteger', () => {
    it('should return 1 for i', () => {
        expect(romanToInteger('I')).toBe(1);
    });
    it('should return 2 for ii', () => {
        expect(romanToInteger('II')).toBe(2);
    });
    it('should return 3 for iii', () => {
        expect(romanToInteger('III')).toBe(3);
    });
    it('should return 4 for iv', () => {
        expect(romanToInteger('IV')).toBe(4);
    });
    it('should return 5 for v', () => {
        expect(romanToInteger('V')).toBe(5);
    });
    it('should return 6 for vi', () => {
        expect(romanToInteger('VI')).toBe(6);
    });
    it('should return 9 for ix', () => {
        expect(romanToInteger('IX')).toBe(9);
    });
    it('should return 10 for x', () => {
        expect(romanToInteger('X')).toBe(10);
    });
    it('should return 11 for xi', () => {
        expect(romanToInteger('XI')).toBe(11);
    });
    it('should return 14 for xiv', () => {
        expect(romanToInteger('XIV')).toBe(14);
    });
    it('should return 19 for xix', () => {
        expect(romanToInteger('XIX')).toBe(19);
    });
    it('should return 20 for xx', () => {
        expect(romanToInteger('XX')).toBe(20);
    });
    it('should return 24 for xxiv', () => {
        expect(romanToInteger('XXIV')).toBe(24);
    });
    it('should return 44 for xliv', () => {
        expect(romanToInteger('XLIV')).toBe(44);
    });
    it('should return 91 for xci', () => {
        expect(romanToInteger('XCI')).toBe(91);
    });
    it('should return 119 for cxix', () => {
        expect(romanToInteger('CXIX')).toBe(119);
    });
    it('should return 123 for cxxiii', () => {
        expect(romanToInteger('CXXIII')).toBe(123);
    });
    it('should return 999 for cmxcix', () => {
        expect(romanToInteger('CMXCIX')).toBe(999);
    });
    it('should return 1000 for m', () => {
        expect(romanToInteger('M')).toBe(1000);
    });
    it('should return 1001 for mi', () => {
        expect(romanToInteger('MI')).toBe(1001);
    });
    it('should return 1004 for miv', () => {
        expect(romanToInteger('MIV')).toBe(1004);
    });
    it('should return 1459 for mcdlix', () => {
        expect(romanToInteger('MCDLIX')).toBe(1459);
    });
    it('should return 2000 for mm', () => {
        expect(romanToInteger('MM')).toBe(2000);
    });
    it('should return 2001 for mmi', () => {
        expect(romanToInteger('MMI')).toBe(2001);
    });
    it('should return 2049 for mmxlix', () => {
        expect(romanToInteger('MMXLIX')).toBe(2049);
    });
    it('should return 2999 for mmcmlcix', () => {
        expect(romanToInteger('MMCMXCIX')).toBe(2999);
    });
    it('should return 3123 for mmmcxxiii', () => {
        expect(romanToInteger('MMMCXXIII')).toBe(3123);
    });
    it('should return 3459 for mmmcdlix', () => {
        expect(romanToInteger('MMMCDLIX')).toBe(3459);
    });
    it('should return 3999 for mmmcmxcix', () => {
        expect(romanToInteger('MMMCMXCIX')).toBe(3999);
    });
    it('should return 2024 for mmxxiv', () => {
        expect(romanToInteger('MMXXIV')).toBe(2024);
    });
});
