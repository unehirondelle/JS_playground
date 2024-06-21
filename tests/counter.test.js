const {createCounter, createCounterII, createCounterIII} = require("../services/counter");
describe('counter', () => {
    describe('counterI', () => {
        it('returns given value incremented', () => {
            const counter = createCounter(10);
            counter();
            counter();
            const final = counter();
            const res = 12;
            expect(final).toBe(res);
        });
    });
    describe('counterII', () => {
        it('returns expected value when different methods are called consequently', () => {
            const counter = createCounterII(10);
            const spyIncrement = jest.spyOn(counter, 'increment');
            const spyDecrement = jest.spyOn(counter, 'decrement');
            counter.increment();
            counter.increment();
            const final = counter.decrement();
            const res = 11;
            expect(final).toBe(res);
            expect(spyIncrement).toBeCalledTimes(2);
            expect(spyDecrement).toBeCalledTimes(1);
        });
    });
    describe('counterIII', () => {
        it('returns 0 when called initially', () => {
            const counter = createCounterIII();
            expect(counter.count).toBe(0);
        });
        it('returns 1 when called twice', () => {
            const counter = createCounterIII();
            counter.count;
            expect(counter.count).toBe(1);
        });
        it('cannot be altered', () => {
            const counter = createCounterIII();
            expect(counter.count).toBe(0);
            expect(counter.count).toBe(1);
            expect(counter.count).toBe(2);
            counter.count = 5;
            expect(counter.count).toBe(3);
            expect(counter.count).toBe(4);
        });
    });
});