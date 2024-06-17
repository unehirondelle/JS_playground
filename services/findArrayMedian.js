const {PriorityQueue} = require("../classes/priorityQueue");
const findArrayMedian = (arr1, arr2) => {
    const minHeap = new PriorityQueue((a, b) => a - b); //asc
    const maxHeap = new PriorityQueue((a, b) => b - a); //desc

    const addNumToHeap = num => {
        if (minHeap.isEmpty()) {
            minHeap.add(num);
        } else {
            if (num >= minHeap.peek()) {
                minHeap.add(num);
            } else {
                maxHeap.add(num);
            }
        }

        if (minHeap.size() > maxHeap.size() + 1) {
            maxHeap.add(minHeap.poll());
        } else if (maxHeap.size() > minHeap.size()) {
            minHeap.add(maxHeap.poll());
        }
    }

    for (const num of arr1) {
        addNumToHeap(num);
    }

    for (const num of arr2) {
        addNumToHeap(num);
    }

    if (minHeap.size() === maxHeap.size()) {
        return (minHeap.peek() + maxHeap.peek()) / 2;
    } else {
        return minHeap.peek();
    }
};

module.exports = {findArrayMedian};

//The time complexity per entry is 0(log n)