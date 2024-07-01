const {classNames} = require("../services/classNames");
describe('classNames', () => {
    it('should return string of string and number', () => {
        expect(classNames('BFE')).toBe('BFE')
        expect(classNames('BFE', 'dev')).toBe('BFE dev')
        expect(classNames('BFE', 'dev', 'is', 100)).toBe('BFE dev is 100')
    });
    it('should ignore primitives besides string and number', () => {
        expect(classNames(
            null, undefined, Symbol(), 1n, true, false
        )).toBe('')
        expect(classNames(
            null, undefined,'BFE', Symbol(), 1n,'dev', 'is', true,  100,false
        )).toBe('BFE dev is 100')
    });
    it('should calculate arg value and return if truthy', () => {
        const obj = new Map([['foo', 'bar']])
        obj.cool = '!'
        obj.not = false
        obj[Symbol()] = 'symbol'
        Object.defineProperty(obj, 'hidden', {value: true})
        expect(classNames({BFE: [], dev: true, is: 3}, obj)).toBe('BFE dev is cool')
    });
    it('should flatten array', () => {
        const obj = new Map([['foo', 'bar']])
        obj.cool = '!'
        obj.not = false
        obj[Symbol()] = 'symbol'
        Object.defineProperty(obj, 'hidden', {value: true})
        expect(classNames(['BFE', [{dev: true}, ['is', [obj]]]])).toBe('BFE dev is cool')
    });
});