const pipe = funcs => {
    return (...args) => {
        return funcs.reduce((acc, fn) => fn(acc), args);
    };
};

module.exports = {pipe};

const times = (y) => (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) => (x) => x - y
const divide = (y) => (x) => x / y

console.log(pipe([times(2), times(3)])(2))