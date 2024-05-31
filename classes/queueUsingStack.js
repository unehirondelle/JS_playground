const {Stack} = require("./stack");

class Queue {
    constructor() {
        this.stack = new Stack();
        this.helperStack = new Stack();
    }

    enqueue(element) {
        while (this.stack.size() > 0) {
            this.helperStack.push(this.stack.pop());
        }

        // now add the element to stack1
        this.stack.push(element);

        // transfer back
        while (this.helperStack.size() > 0) {
            this.stack.push(this.helperStack.pop());
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

    getQueue() {
        return this.stack.getValue();
    }
}

module.exports = {Queue};