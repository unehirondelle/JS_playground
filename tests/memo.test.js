const {memo} = require("../services/memo");
describe('memo', () => {
    it('returns a function', () => {
        const func = (a, b) => {
            return `${a}_${b}`;
        }
        const memoed = memo(func)
        expect(typeof memoed).toBe('function')
    });

    it('returns a function when resolver is passed', () => {
        const func = (a, b) => {
            return `${a}_${b}`
        }
        const memoed = memo(func, () => '1')
        expect(typeof memoed).toBe('function')
    });

    it('uses passed function to get the result', () => {
        const func = (a, b) => a + b
        const memoed = memo(func)
        expect(memoed(1, 2)).toBe(3)
    });

    it('relays the right this and arguments', () => {
        function funcThis(b) {
            return `${this.a}_${b}`
        }

        const memoed = memo(funcThis)
        const a = {
            a: 1,
            memoed
        }
        expect(a.memoed(2)).toBe('1_2')
    });

    it('returns the result right away if cache has entry', () => {
        let callCount = 0
        const func = (a, b) => {
            callCount += 1
            return a + b
        }
        const memoed = memo(func)

        memoed(1, 2)
        expect(callCount).toBe(1)
        memoed(1, 2)
        expect(callCount).toBe(1)
        memoed(1, 3)
        expect(callCount).toBe(2)
    });

    it('uses resolver to get the cache key if passed', () => {
        let callCount = 0
        const func = (a, b) => {
            callCount += 1
            return a + b
        }
        const memoed = memo(func, (a, b) => {
            return (a + b) % 2 === 0 ? 'even' : 'odd'
        })

        memoed(1, 2)
        expect(callCount).toBe(1)
        memoed(1, 4)
        expect(callCount).toBe(1)
        memoed(1, 3)
        expect(callCount).toBe(2)
        memoed(11, 31)
        expect(callCount).toBe(2)
    });
})










