const {pickUpStones} = require("../services/pickUpStones");
describe('pickUpStones', () => {
    it('should return B given 1', () => {
        expect(pickUpStones(1)).toBe('B');
    });
    it('should return A given 2', () => {
        expect(pickUpStones(2)).toBe('A');
    });
    it('should return A given 3', () => {
        expect(pickUpStones(3)).toBe('A');
    });
    it('should return B given 4', () => {
        expect(pickUpStones(4)).toBe('B');
    });
    it('should return A given 5', () => {
        expect(pickUpStones(5)).toBe('A');
    });
    it('should return A given 6', () => {
        expect(pickUpStones(6)).toBe('A');
    });
    it('should return B given 7', () => {
        expect(pickUpStones(7)).toBe('B');
    });
    it('should return A given 8', () => {
        expect(pickUpStones(8)).toBe('A');
    });
    it('should return A given 9', () => {
        expect(pickUpStones(9)).toBe('A');
    });
    it('should return B given 10', () => {
        expect(pickUpStones(10)).toBe('B');
    });
    it('should return A given 20', () => {
        expect(pickUpStones(20)).toBe('A');
    });
    it('should return A given 30', () => {
        expect(pickUpStones(30)).toBe('A');
    });
    it('should return A given 81', () => {
        expect(pickUpStones(81)).toBe('A');
    });
    it('should return A given 90', () => {
        expect(pickUpStones(90)).toBe('A');
    });
    it('should return A given 102', () => {
        expect(pickUpStones(102)).toBe('A');
    });
    it('should return B given 901', () => {
        expect(pickUpStones(901)).toBe('B');
    });
    it('should return A given 1005', () => {
        expect(pickUpStones(1005)).toBe('A');
    });
});