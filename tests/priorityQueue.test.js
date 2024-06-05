const {PriorityQueue} = require("../classes/priorityQueue");
describe('priorityQueue', () => {
    it('polls a smaller number sooner', () => {
        const pq = new PriorityQueue((a, b) => a - b);
        pq.add(5);
        pq.add(3);
        pq.add(1);
        pq.add(4);
        pq.add(2);
        const result = [];
        while (pq.size() > 0) {
            result.push(pq.poll());
        }

        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('polls a larger number sooner', () => {
        const pq = new PriorityQueue((a, b) => b - a);
        pq.add(1);
        pq.add(3);
        pq.add(4);
        pq.add(5);
        pq.add(2);
        const result = [];
        while (pq.size() > 0) {
            result.push(pq.poll());
        }

        expect(result).toEqual([5, 4, 3, 2, 1]);
    });

    it('all methods work', () => {
        const pq = new PriorityQueue((a, b) => b - a);
        pq.add(1);
        expect(pq.peek()).toBe(1);
        expect(pq.size()).toBe(1);
        pq.add(3);
        expect(pq.peek()).toBe(3);
        expect(pq.size()).toBe(2);
        pq.add(4);
        expect(pq.peek()).toBe(4);
        expect(pq.size()).toBe(3);
        expect(pq.poll()).toBe(4);
        expect(pq.peek()).toBe(3);
        expect(pq.size()).toBe(2);
        expect(pq.poll()).toBe(3);
        expect(pq.poll()).toBe(1);
        expect(pq.size()).toBe(0);
        expect(pq.poll()).toBe(undefined);
    });
});