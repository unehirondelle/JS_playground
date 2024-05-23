require('../services/groupBy');

describe('groupBy', () => {
    it('given an array of objects, returns object with keys matching the cb', () => {
        const arr = new Array({"id": "1"}, {"id": "1"}, {"id": "2"});
        const groupedArr = arr.groupBy(item => item.id);
        const res = {
            "1": [{"id": "1"}, {"id": "1"}],
            "2": [{"id": "2"}]
        };
        expect(groupedArr).toEqual(res);
    });
    it('given an array of arrays, returns an object with key matching the cb', () => {
        const arr = new Array([1, 2, 3], [1, 3, 5], [1, 5, 9]);
        const groupedArr = arr.groupBy(list => list[0]);
        const res = {
            "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
        };
        expect(groupedArr).toEqual(res);
    });
    it('given an array of primitives, returns an object with keys matching the cb', () => {
        const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        const groupedArr = arr.groupBy(el => el > 5);
        const res = {
            "true": [6, 7, 8, 9, 10],
            "false": [1, 2, 3, 4, 5]
        };
        expect(groupedArr).toEqual(res);
    });
});