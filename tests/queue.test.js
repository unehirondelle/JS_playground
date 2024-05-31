const {Queue} = require('../classes/queue');

describe('queue', () => {
    it('adds a single el to the end of the array', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.getQueue()).toEqual([1, 2]);
    });
    it('adds a few elements to array consequently, each next at the end of the array', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.getQueue()).toEqual([1, 2, 3]);
    });
    it('removes a single el from the beginning of the array', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2).enqueue(3);
        queue.dequeue();
        expect(queue.getQueue()).toEqual([2, 3]);
    });
    it('removes a few elements from array consequently, each next from the beginning of the array', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5);
        queue.dequeue().dequeue().dequeue();
        expect(queue.getQueue()).toEqual([4, 5]);
    });
    it('returns first element of the array', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.peek()).toBe(1);
        expect(queue.getQueue()).toEqual([1, 2, 3]);
    });
    it('returns an array length', () => {
        const queue = new Queue();
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.size()).toEqual(3);
    });
});