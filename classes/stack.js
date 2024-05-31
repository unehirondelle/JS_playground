class Stack { // vertical construction, new stuff is always at the top
    #arr = [];

    push(element) { // add element to stack
        this.#arr.unshift(element);
    }

    peek() { // get the top element
        return this.#arr[0];
    }

    pop() { // remove  and return the top element
        return this.#arr.shift();
    }

    size() { /* count of elements */
        return this.#arr.length;
    }

    getValue() {
        return this.#arr;
    }
}

module.exports = {Stack};