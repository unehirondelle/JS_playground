const {memoizeOne} = require("../services/memoizeOne");
describe('memoizeOne', () => {
    it('should return a function', () => {
        const func = (...args) => {
            return args;
        };
        const memoed = memoizeOne(func);
        expect(typeof memoed).toBe('function');
    });
    it('should use passed function to get the result', () => {
        const func = (...args) => args;
        const memoed = memoizeOne(func);
        expect(memoed(1)).toEqual([1]);
        expect(memoed(1, 2)).toEqual([1, 2]);
        expect(memoed(1, 2, 3)).toEqual([1, 2, 3]);
    });
    it('should relay the right this and arguments', () => {
        function funcThis(b) {
            return `${this.a}_${b}`;
        }

        const memoed = memoizeOne(funcThis);
        const a = {
            a: 1,
            memoed
        };
        expect(a.memoed(2)).toBe('1_2');
        expect(a.memoed(3)).toBe('1_3');
    });
    it('should also take this into the comparison', () => {
        let callCount = 0;

        function funcThis(b) {
            callCount += 1;
            return `${this.a}_${b}`;
        }

        const memoed = memoizeOne(funcThis);
        const a = {
            a: 1,
            memoed
        };

        const b = {
            a: 2,
            memoed
        };
        expect(a.memoed(2)).toBe('1_2');
        expect(callCount).toBe(1);
        expect(a.memoed(2)).toBe('1_2');
        expect(callCount).toBe(1);
        expect(a.memoed(3)).toBe('1_3');
        expect(callCount).toBe(2);
        expect(a.memoed(3)).toBe('1_3');
        expect(callCount).toBe(2);
        expect(b.memoed(3)).toBe('2_3');
        expect(callCount).toBe(3);
        expect(a.memoed(3)).toBe('1_3');
        expect(callCount).toBe(4);
    });
    it('should return the result if cache has entry', () => {
        let callCount = 0;
        const func = (a, b) => {
            callCount += 1;
            return a + b;
        };
        const memoed = memoizeOne(func);

        expect(memoed(1, 2)).toBe(3);
        expect(callCount).toBe(1);
        expect(memoed(1, 2)).toBe(3);
        expect(callCount).toBe(1);
        expect(memoed(1, 3)).toBe(4);
        expect(callCount).toBe(2);
    });
    it('should use strict equal as default isEqual', () => {
        let callCount = 0;
        const func = (a, b) => {
            callCount += 1;
            return a + b;
        };
        const memoed = memoizeOne(func);

        expect(memoed(1, 2)).toBe(3);
        expect(callCount).toBe(1);
        expect(memoed(1, '2')).toBe('12');
        expect(callCount).toBe(2);
        expect(memoed(1, '2')).toBe('12');
        expect(callCount).toBe(2);
    });
    it('should only remember last result', () => {
        let callCount = 0;
        const func = (a, b) => {
            callCount += 1;
            return a + b;
        };
        const memoed = memoizeOne(func);

        expect(memoed(1, 2)).toBe(3);
        expect(callCount).toBe(1);
        expect(memoed(1, 3)).toBe(4);
        expect(callCount).toBe(2);
        expect(memoed(1, 2)).toBe(3);
        expect(callCount).toBe(3);
        expect(memoed(1, 3)).toBe(4);
        expect(callCount).toBe(4);
        expect(memoed(1, 3)).toBe(4);
        expect(callCount).toBe(4);
    });
    it('should support isEqual(true)', () => {
        let callCount = 0
        const func = (a, b) => {
            callCount += 1
            return a + b
        }
        const memoed = memoizeOne(func, () => true)

        expect(memoed(1, 2)).toBe(3)
        expect(callCount).toBe(1)
        expect(memoed(1, 3)).toBe(3)
        expect(callCount).toBe(1)
        expect(memoed(10, 30)).toBe(3)
        expect(callCount).toBe(1)
    });
    it('should support isEqual(false)', () => {
        let callCount = 0
        const func = (a, b) => {
            callCount += 1
            return a + b
        }
        const memoed = memoizeOne(func, () => false)

        expect(memoed(1, 2)).toBe(3)
        expect(callCount).toBe(1)
        expect(memoed(1, 2)).toBe(3)
        expect(callCount).toBe(2)
        expect(memoed(1, 3)).toBe(4)
        expect(callCount).toBe(3)
        expect(memoed(10, 30)).toBe(40)
        expect(callCount).toBe(4)
    });
    it('should support any isEqual', () => {
        let callCount = 0
        const func = (a, b, c) => {
            callCount += 1
            return a + b + c
        }
        const memoed = memoizeOne(func,
            (args1, args2) => Math.max(...args1) === Math.max(...args2)
        )

        expect(memoed(1, 2, 3)).toBe(6)
        expect(callCount).toBe(1)
        expect(memoed(1, 1, 3)).toBe(6)
        expect(callCount).toBe(1)
        expect(memoed(2, 2, 3)).toBe(6)
        expect(callCount).toBe(1)
        expect(memoed(2, 2, 2)).toBe(6)
        expect(callCount).toBe(2)
    });
});