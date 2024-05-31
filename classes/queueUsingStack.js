const {Stack} = require("./stack");

class Queue {
    constructor() {
        this.stack = new Stack();
        this.storageStack = new Stack();
    }

    enqueue(element) {
        for (let i = 0; i < this.stack.size(); i++) {
            const el = this.stack.peek()
            this.storageStack.push(el);
        }

        // now add the element to stack1
        this.stack.push(element);

        // transfer back
        for (let i = 0; i < this.storageStack.size(); i++) {
            const el = this.storageStack.peek();
            this.stack.push(el);
        }

        return this;
    }

    peek() {
        return this.stack.peek();
    }

    size() {
        return this.stack.size();
    }

    dequeue() {
        return this.stack.pop();
    }
}

module.exports = {Queue};