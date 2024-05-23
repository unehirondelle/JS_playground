const {joinArrById} = require("../services/joinArrById");
describe('joinArrayById', () => {
    it('returns array of objects given arrays with unique ids', () => {
        const arr1 = [
            {"id": 1, "x": 1},
            {"id": 2, "x": 9}
        ];
        const arr2 = [
            {"id": 3, "x": 5}
        ];
        const res = [
            {"id": 1, "x": 1},
            {"id": 2, "x": 9},
            {"id": 3, "x": 5}
        ];
        expect(joinArrById(arr1, arr2)).toEqual(res);
    });
    it('given arrays with some ids duplicated, returns an array of objects with unique ids where the object with duplicated id has values overwritten by the second', () => {
        const arr1 = [
            {"id": 1, "x": 2, "y": 3},
            {"id": 2, "x": 3, "y": 6}
        ];
        const arr2 = [
            {"id": 2, "x": 10, "y": 20},
            {"id": 3, "x": 0, "y": 0}
        ];
        const res = [
            {"id": 1, "x": 2, "y": 3},
            {"id": 2, "x": 10, "y": 20},
            {"id": 3, "x": 0, "y": 0}
        ];
        expect(joinArrById(arr1, arr2)).toEqual(res);
    });
    it('given arrays with some ids duplicated and nested, returns an array of objects with unique ids where the object with duplicated id has values overwritten by the second', () => {
        const arr1 = [
            {"id": 1, "b": {"b": 94}, "v": [4, 3], "y": 48}
        ];
        const arr2 = [
            {"id": 1, "b": {"c": 84}, "v": [1, 3]}
        ];
        const res = [
            {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
        ];
        expect(joinArrById(arr1, arr2)).toEqual(res);
    });
    it('given arrays with some ids duplicated and nested, also objects have different number of keys, returns an array of objects with unique ids where the object with duplicated id has values overwritten by the second', () => {
        const arr1 = [
            {"id": 1, "b": {"c": 84}, "v": [1, 3]}
        ];
        const arr2 = [
            {"id": 1, "b": {"b": 94}, "v": [4, 3], "y": 50}
        ];
        const res = [
            {"id": 1, "b": {"b": 94}, "v": [4, 3], "y": 50}
        ];
        expect(joinArrById(arr1, arr2)).toEqual(res);
    });
});