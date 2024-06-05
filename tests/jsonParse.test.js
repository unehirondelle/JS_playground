const {jsonParse} = require("../services/jsonParse");
describe('jsonParse', () => {
    it('returns {} given  "{}"', () => {
        expect(jsonParse('{}')).toEqual(JSON.parse('{}'));
    });
    it('returns object given a legit stringified object', () => {
        expect(jsonParse('{"a":3}')).toEqual(JSON.parse('{"a":3}'));
    });
    it('returns boolean given a stringified boolean', () => {
        expect(jsonParse("true")).toEqual(JSON.parse("true"));
    });
    it('returns number given a stringified number', () => {
        expect(jsonParse("123")).toEqual(JSON.parse("123"));
    });
    it('returns string given a stringified string', () => {
        expect(jsonParse('"123"')).toEqual(JSON.parse('"123"'));
    });
    it('returns null given a stringified null', () => {
        expect(jsonParse('null')).toEqual(JSON.parse('null'));
    });
    it('returns an array given a legit stringified array', () => {
        expect(jsonParse('[{"a":{"b":{"c":[1]}}},null,"str"]'))
            .toEqual(JSON.parse('[{"a":{"b":{"c":[1]}}},null,"str"]'));
    }); //TODO: fir the following test case
    it('returns an array given a legit stringified array with long string', () => {
        expect(jsonParse('[{"a":{"b":{"c":[1],"d":"BFE,dev"}}},null,"str"]'))
            .toEqual(JSON.parse('[{"a":{"b":{"c":[1],"d":"BFE,dev"}}},null,"str"]'));
    });
    it('returns an object given a legit stringified object with emoji', () => {
        expect(jsonParse('{"a":"✌️"}')).toEqual(JSON.parse('{"a":"✌️"}'));
    });
    it('throws an exception given an array with extra comma', () => {
        expect(() => jsonParse('[1,2,]')).toThrow();
    });
    it('throws an exception given an object with escaping chars', () => {
        expect(() => jsonParse('{\'a\':3}')).toThrow()  ;
    });
    it('throws an exception given an object without value', () => {
        expect(() => jsonParse('{"a":}')).toThrow();
    });
});