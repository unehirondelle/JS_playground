const {objDiff} = require("../services/objDiff");
describe('objDiff', () => {
    it('returns expected result given primitives and flat objects as values', () => {
        const obj1 = {a: 1, v: 3, x: [], z: {a: null}};
        const obj2 = {a: 2, v: 4, x: [], z: {a: 2}};
        const res = {a: [1, 2], v: [3, 4], z: {a: [null, 2]}};
        expect(objDiff(obj1, obj2)).toEqual(res);
    });
    it('returns expected result given primitives and nested arrays as values', () => {
        const obj1 = {a: 5, v: 6, z: [1, 2, 4, [2, 5, 7]]};
        const obj2 = {a: 5, v: 7, z: [1, 2, 3, [1]]};
        const res = {
            v: [6, 7],
            z: {
                2: [4, 3],
                3: {
                    0: [2, 1]
                }
            }
        };
        expect(objDiff(obj1, obj2)).toEqual(res);
    });
    it('returns expected result given primitives and nested objects as values', () => {
        const obj1 = {a: {b: 1}};
        const obj2 = {a: [5]};
        const res = {a: [{b: 1}, [5]]};
        expect(objDiff(obj1, obj2)).toEqual(res);
    });
    it('returns {} given identical objects with different fields order', () => {
        const obj1 = {a: [1, 2, {}], b: false};
        const obj2 = {a: [1, 2, {}], b: false};
        const res = {};
        expect(objDiff(obj1, obj2)).toEqual(res);
    });
    it('returns expected result given objects with a primitive and empty array in same field', () => {
        const obj1 = {a: [1, 2, {}], b: false};
        const obj2 = {a: [1, 2, {}], b: []};
        const res = {b: [false, []]};
        expect(objDiff(obj1, obj2)).toEqual(res);
    });
});