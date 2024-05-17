Function.prototype.callPolyfill = function (context, ...args) {
    return this.bind(context)(...args);
    // return this.apply(context, args); // context is only applied for a single invocation
};

function increment() {
    this.count++;
    return this.count;
}

function decrement() {
    this.count--;
    return this.count;
}

console.log(increment.callPolyfill({count: 1})); //2
console.log(decrement.callPolyfill({count: 1})); //0