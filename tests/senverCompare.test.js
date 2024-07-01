const {semverCompare} = require("../services/semverCompare");
describe('semverCompare', () => {
    it('should return 1 for v1 greater in minor', () => {
        expect(semverCompare('12.1.0', '12.0.9')).toBe(1);
    });
    it('should return -1 for v2 greater in patch', () => {
        expect(semverCompare('12.1.0', '12.1.2')).toBe(-1);
    });
    it('should return 0 for equal versions', () => {
        expect(semverCompare('5.0.1', '5.0.1')).toBe(0);
    });
    it('should return 1 for v1 greater in major', () => {
        expect(semverCompare('4.1.0', '3.1.2')).toBe(1);
    });
    it('should return 1 for v1 greater in patch', () => {
        expect(semverCompare('0.1.100', '0.1.99')).toBe(1);
    });
    it('should return -1 for v2 greater in patch #2', () => {
        expect(semverCompare('5.4.3', '5.4.4')).toBe(-1);
    });
    it('should return 1 for v1 greater in major #2', () => {
        expect(semverCompare('15.4.3', '5.4.4')).toBe(1);
    });
    it('should return 1 for 1 greater in minor', () => {
        expect(semverCompare('15.11.3', '5.4.411')).toBe(1);
    });
});