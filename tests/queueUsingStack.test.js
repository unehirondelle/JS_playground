const {Queue} = require('../classes/queueUsingStack');

describe('queueUsingStack', () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
    });

    it('adds a single el to the end of the array', () => {
        expect(queue.getQueue()).toEqual([1, 2, 3]);
    });
    it('removes and returns a single el from the beginning of the array', () => {
        const el = queue.dequeue();
        expect(el).toBe(1);
        expect(queue.getQueue()).toEqual([2, 3]);
    });
    it('removes first element of the array', () => {
        expect(queue.peek()).toBe(1);
        expect(queue.getQueue()).toEqual([1, 2, 3]);
    });
    it('returns an array length', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.size()).toEqual(3);
    });
});