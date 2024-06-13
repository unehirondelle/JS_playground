const {uncompressString} = require("../services/uncompressString");
describe('uncompressString', () => {
    it('should return same string if no conditions', () => {
        expect(uncompressString('BFE')).toBe('BFE');
    });
    it('should return string repeated by n times', () => {
        expect(uncompressString('2(BFE)')).toBe('BFEBFE');
    });
    it('should return expected given chained strings', () => {
        expect(uncompressString('2(BFE)3(dev)')).toBe('BFEBFEdevdevdev');
    });
    it('should return expected given nested strings', () => {
        expect(uncompressString('2(BFE1(dev))')).toBe('BFEdevBFEdev');
    });
    it('should return expected given deeply nested strings', () => {
        expect(uncompressString('2(BFE1(dev))3(2(lover))')).toBe('BFEdevBFEdevloverloverloverloverloverlover');
    });
    it('should returns expected', () => {
        expect(uncompressString('1(BFE11(dev))')).toBe('BFEdevdevdevdevdevdevdevdevdevdevdev');
    });
    it('should return expected given a string with separator', () => {
        expect(uncompressString('3(B2(F1(E))).dev')).toBe('BFEFEBFEFEBFEFE.dev');
    });
});