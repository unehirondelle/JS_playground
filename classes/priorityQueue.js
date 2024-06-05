const {log} = require("../services/log");

class PriorityQueue {

    /**
     * @param {(a: any, b: any) => -1 | 0 | 1} compare -
     * compare function, similar to parameter of Array.prototype.sort
     */
    constructor(compare) {
        this.compare = compare;
        this.arr = [];
    }

    /**
     * return {number} amount of items
     */
    size() {
        return this.arr.length;
    }

    /**
     * returns the head element
     */
    peek() {
        return this.arr[0];
    }

    /**
     * @param {any} element - new element to add
     */
    add(element) {
        let leftIndex = 0;
        let rightIndex = this.size() - 1;
        let counter = 0;

        if (this.size() === 0) {
            this.arr.push(element);
        } else {
            while (leftIndex <= rightIndex) {
                let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
                counter++;
                log(`tick#: ${counter}`);
                if (this.arr[middleIndex] === element) {
                    if (this.arr[middleIndex + 1] !== element) {
                        const rest = this.arr.splice(middleIndex);
                        this.arr.push(element);
                        log('----END----');
                        this.arr = [...this.arr, ...rest];
                        return this.arr;
                    }
                    leftIndex = middleIndex + 1;
                } else if (this.compare(this.arr[middleIndex], element) > 0) {
                    rightIndex = middleIndex - 1;
                } else {
                    leftIndex = middleIndex + 1;
                }

                if (rightIndex - leftIndex <= 1) {
                    let rest;
                    if (this.compare(this.arr[leftIndex], element) > 0) {
                        rest = this.arr.splice(leftIndex);
                    } else if (this.compare(this.arr[rightIndex], element) < 0) {
                        rest = this.arr.splice(rightIndex + 1);
                    } else {
                        rest = this.arr.splice(rightIndex);
                    }
                    this.arr.push(element);
                    log('----END----');
                    this.arr = [...this.arr, ...rest];
                    return this.arr;
                }
            }
        }
    }


    /**
     * remove the head element
     * @return {any} the head element
     */
    poll() {
        return this.arr.shift();
    }
}

module.exports = {PriorityQueue};