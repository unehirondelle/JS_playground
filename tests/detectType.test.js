const {detectType} = require("../services/detectType");
describe('detectType', () => {
    it('returns "number" if given a number', () => {
        expect(detectType(1)).toBe('number');
    });

    it('returns "number" if given a value converted to a number', () => {
        expect(detectType(Number(1))).toBe('number');
    });

    it('returns "number" if given an instance of Number', () => {
        expect(detectType(new Number(1))).toBe('number');
    });

    it('returns "null" given a null', () => {
        expect(detectType(null)).toBe('null');
    });

    it('returns "string" if given a string', () => {
        expect(detectType('string')).toBe('string');
    });

    it('returns "string" if given a value converted to a string', () => {
        expect(detectType(String('string'))).toBe('string');
    });

    it('returns "string" if given an instance of String', () => {
        expect(detectType(new String('string'))).toBe('string');
    });

    it('returns "undefined" given a undefined', () => {
        expect(detectType(undefined)).toBe('undefined');
    });

    it('returns "bigint" given a bigint', () => {
        expect(detectType(1n)).toBe('bigint');
    });

    it('returns "boolean" if given a boolean', () => {
        expect(detectType(true)).toBe('boolean');
    });

    it('returns "boolean" if given a value converted to a boolean', () => {
        expect(detectType(Boolean(true))).toBe('boolean');
    });

    it('returns "boolean" if given an instance of Boolean', () => {
        expect(detectType(new Boolean(true))).toBe('boolean');
    });

    it('returns "array" if given an array', () => {
       expect(detectType([])).toBe('array');
    });

    it('returns "array" if given an instance of Array', () => {
        expect(detectType(new Array())).toBe('array');
    });

    it('returns "arraybuffer" if given an instance of ArrayBuffer', () => {
        expect(detectType(new ArrayBuffer())).toBe('arraybuffer');
    });

    it('returns "date" if given an instance of Date', () => {
       expect(detectType(new Date())).toBe('date');
    });

    it('returns "map" if given an instance of Map', () => {
       expect(detectType(new Map())).toBe('map');
    });

    it('returns "set" if given an instance of Set', () => {
        expect(detectType(new Set())).toBe('set');
    });

    it('returns "symbol" if given an instance of Symbol', () => {
        expect(detectType(Symbol())).toBe('symbol');
    });

    it('returns "object" if given an object', () => {
        expect(detectType({a: 3})).toBe('object');
    });

    it('returns "function" if given a function', () => {
        expect(detectType(() => 3)).toBe('function');
    });
});