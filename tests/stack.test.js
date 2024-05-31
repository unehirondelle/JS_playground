const {Stack} = require('../classes/stack');

describe('stack', () => {
    it('adds a single el to the beginning of the array', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.getValue()).toEqual([2, 1]);
    });
    it('adds a few elements to stack consequently, each next at the beginning of the array', () => {
        const stack = new Stack();
        stack.push(1).push(2).push(3);
        expect(stack.getValue()).toEqual([3, 2, 1]);
    });
    it('removes a single el from the beginning of the array', () => {
        const stack = new Stack();
        stack.push(1).push(2).push(3);
        stack.pop();
        expect(stack.getValue()).toEqual([2, 1]);
    });
    it('removes a few elements from stack consequently, each next from the beginning of the array', () => {
        const stack = new Stack();
        stack.push(1).push(2).push(3).push(4).push(5);
        stack.pop().pop().pop();
        expect(stack.getValue()).toEqual([2, 1]);
    });
    it('removes and returns first element of the array', () => {
        const stack = new Stack();
        stack.push(1).push(2).push(3);
        expect(stack.peek()).toBe(3);
        expect(stack.getValue()).toEqual([2, 1]);
    });
    it('returns an array length', () => {
        const stack = new Stack();
        stack.push(1).push(2).push(3);
        expect(stack.size()).toEqual(3);
    });
});