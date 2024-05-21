const {Array} = require("../services/arrLast");

describe('arrLast', () => {
    it('returns last element of an array of elements', () => {
        const arr = new Array(1, 2, 3);
        const res = 3;
        expect(arr.last()).toBe(res);
    });
    it('returns -1 when given array is empty', () => {
        const arr = new Array();
        const res = -1;
        expect(arr.last()).toBe(res);
    });
});