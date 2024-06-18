const {tokenize} = require("../services/tokenize");
describe('tokenize', () => {
    it('should return array without spaces', () => {
        expect([...tokenize(' 1 * (20 -   300      ) ')])
            .toEqual(['1', '*', '(', '20', '-', '300', ')']);
    });
    it('should return expected', () => {
        expect([...tokenize(' 1 * ((20 + 300) - 4) / ((100 / 6))')])
            .toEqual(['1', '*', '(', '(', '20', '+', '300', ')', '-', '4', ')', '/', '(', '(', '100', '/', '6', ')', ')']);
    });
    it('should return string in array', () => {
        expect([...tokenize(' 11234 ')])
            .toEqual(['11234']);
    });
});