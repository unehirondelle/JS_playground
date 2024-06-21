require("../services/myReduce");
describe('myReduce', () => {
    it('should return expected given an initial value', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const reducer = (a, b) => a + b;
        expect(arr.myReduce(reducer, -1)).toBe(arr.reduce(reducer, -1));
    });
    it('should return expected without initial value', () => {
        const arr = [1, 2, 3, 4, 5, 6].reverse();
        const reducer = (a, b) => a - b;
        expect(arr.myReduce(reducer)).toBe(arr.reduce(reducer));
    });
    it('should return expected for mixed type arr', () => {
        const arr = [1, 2, 3, 4, 5, 6].reverse();
        const reducer = (a, b) => a + b;
        expect(arr.myReduce(reducer, 'a')).toBe(arr.reduce(reducer, 'a'));
    });
    it('should return expected given a reducer will all possible args', () => {
        const arr = [1, 2, 3, 4, 5, 6].reverse();
        const reducer = (a, b, c, d) => {
            if (Array.isArray(a)) {
                a.push([b, c, d]);
                return a;
            } else {
                return [b, c, d];
            }
        }
        expect(arr.myReduce(reducer, [])).toEqual(arr.reduce(reducer, []));
        expect(arr.myReduce(reducer)).toEqual(arr.reduce(reducer));
    });
    it('should return initial value when called from an empty array', () => {
        const arr = [];
        const reducer = (a, b) => {
            return a + b;
        };
        expect(arr.myReduce(reducer, 'init')).toBe(arr.reduce(reducer, 'init'));
    });
    it('should throw an exception given no initial value and called from an empty array', () => {
        const arr = [];
        const reducer = (a, b) => {
            return a + b;
        };
        expect(() => arr.myReduce(reducer)).toThrow();
    });
    it('should return expected given `undefined` initial value', () => {
        const arr = [1];
        const reducer = (a, b) => {
            return '' + a + b;
        };
        expect(arr.myReduce(reducer, undefined)).toBe('undefined1');
    });
    it('should return expected given `null` initial value', () => {
        const arr = [1];
        const reducer = (a, b) => {
            return '' + a + b;
        };
        expect(arr.myReduce(reducer, null)).toBe('null1');
    });
});