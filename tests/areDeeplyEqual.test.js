const fnItself = require('../services/areDeeplyEqual');
const {areDeeplyEqual} = require('../services/areDeeplyEqual');

describe('areDeeplyEqual', () => {
    it('returns false: for objects with all number values, some different', () => {
        expect(areDeeplyEqual({a: 1, b: 3}, {a: 1, b: 2})).toBe(false);
    });
    it('returns true for objects with all number values, all equal', () => {
        expect(areDeeplyEqual({a: 1, b: 3}, {a: 1, b: 3})).toBe(true);
    });
    it('returns false for objects with all string values, some different', () => {
        expect(areDeeplyEqual({a: "1", b: "3"}, {a: "1", b: "2"})).toBe(false);
    });
    it('returns true for objects with all string values, all equal', () => {
        expect(areDeeplyEqual({a: "1", b: "3"}, {a: "1", b: "3"})).toBe(true);
    });
    it('returns false for objects with different array values', () => {
        expect(areDeeplyEqual({a: 1, b: ["3"]}, {a: 1, b: ["2"]})).toBe(false);
    });
    it('returns true for objects with same array values', () => {
        expect(areDeeplyEqual({a: 1, b: ["3"]}, {a: 1, b: ["2"]})).toBe(false);
    });
    it('returns true for objects with same nested object values', () => {
        expect(areDeeplyEqual({a: 1, b: {a: {b: 3}}}, {a: 1, b: {a: {b: 3}}})).toBe(true);
    });
    it('returns false for objects with different nested object values', () => {
        expect(areDeeplyEqual({a: 1, b: {a: {b: 3}}, c: 1}, {a: 1, b: {a: {b: 3}}, c: 0})).toBe(false);
    });
    it('returns true for objects with equal functions', () => {
        expect(areDeeplyEqual({a: () => 1}, {a: () => 1})).toBe(true);
    });
    it('returns false for undefined and null comparison', () => {
        expect(areDeeplyEqual(undefined, null)).toBe(false);
    });
    it('returns false for objects with same key equal to undefined and null', () => {
        expect(areDeeplyEqual({a: undefined}, {a: null})).toBe(false);
    });
    it('returns false for objects with different key equal to undefined and null', () => {
        expect(areDeeplyEqual({a: undefined}, {b: null})).toBe(false);
    });
    it('returns true for objects with same key equal to null', () => {
        expect(areDeeplyEqual({a: null}, {a: null})).toBe(true);
    });
    it('calls function 1 time initially + 1 recursion', () => {
        const mock = jest.spyOn(fnItself, 'areDeeplyEqual');
        const result = fnItself.areDeeplyEqual({a: 1, b: ["3"]}, {a: 1, b: ["2"]});
        expect(result).toBe(false);
        expect(mock).toBeCalledTimes(2);
        mock.mockRestore();
    });
    it('calls function 1 time initially + 2 recursion', () => {
        const mock = jest.spyOn(fnItself, 'areDeeplyEqual');
        const result = fnItself.areDeeplyEqual({a: 1, b: {a: {b: 3}}, c: 1}, {a: 1, b: {a: {b: 3}}, c: 0});
        expect(result).toBe(false);
        expect(mock).toBeCalledTimes(3);
        mock.mockRestore();
    });
});
