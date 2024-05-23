const {jsonToMatrix} = require("../services/jsonToMatrix");
describe('jsonToMatrix', () => {
    it('returns expected result given an array of not empty arrays', () => {
        const arr = [{b: 1, a: 2}, {b: 3, a: 4}];
        const res = [["a", "b"], [2, 1], [4, 3]];
        expect(jsonToMatrix(arr)).toEqual(res);
    });
    it('replaces empty elements with "" given an array of objects with different keys', () => {
        const arr = [{a: 1, b: 2}, {c: 3, d: 4}, {}];
        const res = [["a", "b", "c", "d"], [1, 2, "", ""], ["", "", 3, 4], ["", "", "", ""]];
        expect(jsonToMatrix(arr)).toEqual(res);
    });
    it('returns expected result given an array of nested objects', () => {
        const arr = [{a: {b: 1, c: 2}}, {a: {b: 3, d: 4}}];
        const res = [["a.b", "a.c", "a.d"], [1, 2, ""], [3, "", 4]];
        expect(jsonToMatrix(arr)).toEqual(res);
    });
    it('returns expected result given an array of arrays with objects', () => {
        const arr = [[{a: null}], [{b: true}], [{c: "x"}]];
        const res = [["0.a", "0.b", "0.c"], [null, "", ""], ["", true, ""], ["", "", "x"]];
        expect(jsonToMatrix(arr)).toEqual(res);
    });
    it('returns expected result given an array of objects with primitive values and nexted objects', () => {
        const arr = [{a: {b: 1, c: 2}, b: {c: 3}}, {a: {b: 3, d: 4}, b: 2}];
        const res = [["a.b", "a.c", "a.d", "b", "b.c"], [1, 2, "", "", 3], [3, "", 4, 2, ""]];
        expect(jsonToMatrix(arr)).toEqual(res);
    });
});