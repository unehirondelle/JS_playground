const {sortBy} = require("../services/sortBy");
describe('sortBy', () => {
    it('sorts asc array of elements by element itself', () => {
        const arr = [5, 4, 1, 2, 3];
        const res = [1, 2, 3, 4, 5];
        expect(sortBy(arr, x => x)).toEqual(res);
    });
    it('sorts asc array of objects by a field', () => {
        const arr = [{"x": 1}, {"x": 0}, {"x": -1}];
        const res = [{"x": -1}, {"x": 0}, {"x": 1}];
        expect(sortBy(arr, obj => obj.x)).toEqual(res);
    });
    it('sorts asc array of arrays by an index', () => {
        const arr = [[3, 4], [5, 2], [10, 1]];
        const res = [[10, 1], [5, 2], [3, 4]];
        expect(sortBy(arr, arr => arr[1])).toEqual(res);
    });
    it('sorts desc array of elements by element itself', () => {
        const arr = [5, 4, 1, 2, 3];
        const res = [5, 4, 3, 2, 1];
        expect(sortBy(arr, x => x, 'desc')).toEqual(res);
    });
    it('sorts desc array of objects by a field', () => {
        const arr = [{"x": 1}, {"x": 0}, {"x": -1}];
        const res = [{"x": 1}, {"x": 0}, {"x": -1}];
        expect(sortBy(arr, obj => obj.x, 'desc')).toEqual(res);
    });
    it('sorts desc array of arrays by an index', () => {
        const arr = [[3, 4], [5, 2], [10, 1]];
        const res = [[10, 1], [5, 2], [3, 4]];
        expect(sortBy(arr, arr => arr[0], 'desc')).toEqual(res);
    });
});
