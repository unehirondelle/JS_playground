const {createCounter, createCounterII} = require("../services/counter");
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
       }) ;
    });
});