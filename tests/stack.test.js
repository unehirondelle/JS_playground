const {Stack} = require('../classes/stack');

describe('stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
    });

    it('adds a few elements to stack consequently, each next at the beginning of the array', () => {
        expect(stack.getValue()).toEqual([3, 2, 1]);
    });
    it('removes and returns a single el from the beginning of the array', () => {
        const el = stack.pop();
        expect(el).toBe(3);
        expect(stack.getValue()).toEqual([2, 1]);
    });
    it('returns first element of the array', () => {
        expect(stack.peek()).toBe(3);
        expect(stack.getValue()).toEqual([3, 2, 1]);
    });
    it('returns an array length', () => {
        expect(stack.size()).toEqual(3);
    });
});