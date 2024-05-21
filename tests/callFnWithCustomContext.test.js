require('../services/callFnWithCustomContext');

describe('callFnWithCustomContext', () => {
    it('returns value based on given context', () => {
        function increment() {
            this.count++;
            return this.count;
        }

        const res = increment.callPolyfill({count: 1});
        expect(res).toBe(2);
    });
    it('returns value based on given context and args', () => {
        function greet(name, name2) {
            return `${this.greeting}, ${name} and ${name2}!`
        }

        const res = greet.callPolyfill({greeting: "Hello"}, "Bill", "Sam");
        expect(res).toBe('Hello, Bill and Sam!');
    });
    it('return undefined when no context is given', () => {
       function noContext() {
           return this.context;
       }
       const res = noContext.callPolyfill();
       expect(res).toBe(undefined);
    });
});