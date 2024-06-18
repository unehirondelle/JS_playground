const {calculateAngle} = require("../services/calculateAngle");
describe('calculateAngle', () => {
    it('should return 0 for midnight', () => {
        expect(calculateAngle('00:00')).toBe(0);
    });

    it('should return 0 for noon', () => {
        expect(calculateAngle('12:00')).toBe(0);
    });

    it('should return 30 for 1PM', () => {
        expect(calculateAngle('01:00')).toBe(30);
    });

    it('should return 83 for 12:15', () => {
        expect(calculateAngle('12:15')).toBe(83);
    });

    it('should return 173 for 12:34', () => {
        expect(calculateAngle('12:34')).toBe(173);
    });

    it('should return 118 for 09:05', () => {
        expect(calculateAngle('09:05')).toBe(118);
    });

    it('should return 6 for 23:59', () => {
        expect(calculateAngle('23:59')).toBe(6);
    });

    it('should return 157 for 23:23', () => {
        expect(calculateAngle('23:23')).toBe(157);
    });

    it('should return 8 for 15:15', () => {
        expect(calculateAngle('15:15')).toBe(8);
    });

    it('should return 165 for 23:30', () => {
        expect(calculateAngle('23:30')).toBe(165);
    });
});