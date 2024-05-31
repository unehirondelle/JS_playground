class Stack { // vertical construction, new stuff is always at the top
    #arr = [];

    push(element) { // add element to stack
        this.#arr.unshift(element);
        return this;
    }

    peek() { // get the top element
        return this.#arr.shift();
    }

    pop() { // remove the top element
        this.#arr.shift();
        return this;
    }

    size() { /* count of elements */
        return this.#arr.length;
    }

    getValue() {
        return this.#arr;
    }
}

module.exports = {Stack};