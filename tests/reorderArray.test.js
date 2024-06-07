const {reorderArray} = require("../services/reorderArray");
describe('reorderArray', () => {
    it('returns expected result', () => {
        const A = ['A', 'B', 'C', 'D', 'E', 'F'];
        const B = [1, 5, 4, 3, 2, 0];
        reorderArray(A, B);
        expect(A).toEqual(['F', 'A', 'E', 'D', 'C', 'B']);
    });

    it('returns expected result another arr', () => {
        const A = ['A', 'B', 'C', 'D'];
        const B = [3, 1, 2, 0];
        reorderArray(A, B);
        expect(A).toEqual(['D', 'B', 'C', 'A']);
    });
});