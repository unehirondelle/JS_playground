const Calculator = require("../classes/calculator");
describe('calculator', () => {
    it('returns expected result of chain of add, subtract methods', () => {
        expect(new Calculator(10).add(5).subtract(7).getResult()).toBe(8);
    });
    it('returns expected result of chain of multiply, add, power methods', () => {
        expect(new Calculator(2).multiply(5).add(2).power(2).getResult()).toBe(144);
    });
    it('returns 0 when clear method was called', () => {
        expect(new Calculator(10).add(5).subtract(7).clear()).toBe(0);
    });
    it('throws an error when trying to divide by 0', () => {
        expect(() => new Calculator(20).divide(0).getResult()).toThrow('Division by zero is not allowed');
    });
});