const {isPrime} = require("../services/isPrime");
describe('isPrime', () => {
    it('should return false given 1', () => {
        expect(isPrime(1)).toBe(false);
    });
    it('should return true given 2', () => {
        expect(isPrime(2)).toBe(true);
    });
    it('should return true given 3', () => {
        expect(isPrime(3)).toBe(true);
    });
    it('should return false given 4', () => {
        expect(isPrime(4)).toBe(false);
    });
    it('should return true given 5', () => {
        expect(isPrime(5)).toBe(true);
    });
    it('should return false given 6', () => {
        expect(isPrime(6)).toBe(false);
    });
    it('should return true given 7', () => {
        expect(isPrime(7)).toBe(true);
    });
    it('should return false given 8', () => {
        expect(isPrime(8)).toBe(false);
    });
    it('should return false given 100', () => {
        expect(isPrime(100)).toBe(false);
    });
    it('should return false given 102', () => {
        expect(isPrime(102)).toBe(false);
    });
    it('should return false given 1115', () => {
        expect(isPrime(1115)).toBe(false);
    });
    it('should return false given 9962', () => {
        expect(isPrime(9962)).toBe(false);
    });
    it('should return true given 9973', () => {
        expect(isPrime(9973)).toBe(true);
    });
    it('should return true given 65537', () => {
        expect(isPrime(65537)).toBe(true);
    });
    it('should return false given 96721', () => {
        expect(isPrime(96721)).toBe(false);
    });
    it('should return false given 844561', () => {
        expect(isPrime(844561)).toBe(false);
    });
    it('should return true given 1114111', () => {
        expect(isPrime(1114111)).toBe(true);
    });
});