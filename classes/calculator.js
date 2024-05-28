module.exports = class Calculator {
    result = 0

    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw "Division by zero is not allowed"
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    clear() {
        this.result = 0;
        return this.result;
    }

    getResult() {
        return this.result;
    }
};

// console.log(new Calculator(10).add(5).subtract(7).getResult()) //8
// console.log(new Calculator(2).multiply(5).power(2).getResult())//100
// console.log(new Calculator(10).add(5).subtract(7).clear()) //0
// console.log(new Calculator(20).divide(0).getResult()) //"Division by zero is not allowed"