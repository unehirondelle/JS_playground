class Queue {
    #queue = [];

    enqueue(element) { // add last element to array
        this.#queue.push(element);
        return this;
    }

    peek() { // get first element of array
        return this.#queue[0];
    }

    size() {
        return this.#queue.length;
    }

    dequeue() { // remove last element of array;
        this.#queue.shift();
        return this;
    }

    getQueue() {
        return this.#queue;
    }
}

module.exports = {Queue};