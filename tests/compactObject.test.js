const {compactObject} = require("../services/compactObject");

describe('compactObject', () => {
    it('returns truthy elements from a flat array', () => {
        const obj = [null, 0, 2, false, 1];
        const res = [2, 1];
        expect(compactObject(obj)).toEqual(res);
    });
    it('returns truthy elements from an object', () => {
        const obj = {"a": null, "b": [false, 1]};
        const res = {"b": [1]};
        expect(compactObject(obj)).toEqual(res);
    });
    it('returns truthy elements from a nested array', () => {
        const obj = [null, 0, 5, [0], [false, 16]];
        const res = [5, [], [16]];
        expect(compactObject(obj)).toEqual(res);
    });
    it('returns empty array given an array without truthy elements', () => {
        const obj = [null, 0, false];
        const res = [];
        expect(compactObject(obj)).toEqual(res);
    });
    it('returns an empty object given an object without truthy elements', () => {
        const obj = {"a": null, "b": false};
        const res = {};
        expect(compactObject(obj)).toEqual(res);
    });
    it('returns an object with fields having empty objects and arrays given an object where all levels have falsy elements', () => {
        const obj = {"a": null, "b": [false], "c": {"d": 0}};
        const res = {"b": [], "c": {}};
        expect(compactObject(obj)).toEqual(res);
    });
});
