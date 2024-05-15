export class Counter {
    constructor(n) {
        this.n = n;
    }

    increment(){
        return this.n++;
    }
}

const counter = Counter(10);
console.log('class', counter())
console.log('class', counter.increment())
console.log('class', counter.increment())