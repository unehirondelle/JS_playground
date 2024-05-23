const {jsonStringify} = require("../services/jsonStringify");
describe('jsonStringify', () => {
    it('returns "null" given null', () => {
        const value = null;
        const res = 'null';
        expect(jsonStringify(value)).toBe(res);
    });
    it('returns undefined given undefined', () => {
        const value = undefined;
        const res = undefined;
        expect(jsonStringify(value)).toBe(res);
    });
    it('returns "string" given "string"', () => {
        const value = "string";
        const res = '"string"';
        expect(jsonStringify(value)).toBe(res);
    });
    it('returns "0" given 0', () => {
        const value = 0;
        const res = '0';
        expect(jsonStringify(value)).toBe(res);
    });
    it('returns "true" given true', () => {
        const value = true;
        const res = 'true';
        expect(jsonStringify(value)).toBe(res);
    });
    it('returns undefined given a function', () => {
        const value = () => 1;
        const res = '() => 1';
        expect(jsonStringify(value)).toBe(undefined);
    });
    it('returns stringified object given an object', () => {
        const value = {a: 1, b: {c: 2}};
        const res = '{"a":1,"b":{"c":2}}';
        expect(jsonStringify(value)).toBe(res);
    });
    it('returns stringified array given an array', () => {
        const value = [1, 2, [3], 4, {a: 1}];
        const res = '[1,2,[3],4,{"a":1}]';
        expect(jsonStringify(value)).toBe(res);
    });
});