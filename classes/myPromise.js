class MyPromise {
    constructor(executor) {
        this.state = 'pending';

        try {
            executor(this.#resolve.bind(this), this.#reject.bind(this));
        } catch (error) {
            this.#reject(error);
        }
    }

    #resolve(value) {
        if (this.state !== 'pending') { // promise can only be resolved/rejected once
            return;
        }

        this.state = 'fulfilled';
        this.result = value;

        queueMicrotask(() => { //to make sure microtasks will be completed in a specific order without interruptions
            if (this.onFulfilled === undefined) {
                return;
            }

            try {
                const returnValue = this.onFulfilled(this.result);
                const isReturnValuePromise = returnValue instanceof MyPromise;

                if (!isReturnValuePromise) {
                    this.thenPromiseResolve(returnValue);
                } else {
                    returnValue.then(
                        this.thenPromiseResolve,
                        this.thenPromiseReject
                    )
                }
            } catch (error) {
                this.thenPromiseReject(error);
            }
        });
    };

    #reject(error) {
        if (this.state !== 'pending') { // promise can only be resolved/rejected once
            return;
        }

        this.state = 'rejected';
        this.result = error;

        queueMicrotask(() => {
            if (this.onRejected === undefined) {
                return;
            }

            try {
                const returnValue = this.onRejected(this.result);
                const isReturnValuePromise = returnValue instanceof MyPromise;

                if (!isReturnValuePromise) {
                    this.thenPromiseResolve(returnValue);
                } else {
                    returnValue.then(
                        this.thenPromiseResolve,
                        this.thenPromiseReject
                    )
                }
            } catch (err) {
                this.thenPromiseReject(err);
            }
        });
    }

    then(onFulfilled, onRejected) {
        const isOnFulfilledFunction = typeof onFulfilled === 'function';
        this.onFulfilled = isOnFulfilledFunction ? onFulfilled : value => value;

        const isOnRejectedFunction = typeof onRejected === 'function';
        this.onRejected = isOnRejectedFunction ? onRejected : error => {
            throw error
        };

        return new MyPromise((resolve, reject) => {
            this.thenPromiseResolve = resolve;
            this.thenPromiseReject = reject;
        });
    }

    catch(onRejected) {
        // it's the same as call .then(undefined, onRejected)
        return this.then(undefined, onRejected);
    }

    static resolve(value) {
        const isValuePromise = value instanceof MyPromise;

        //return a promise so it'll be resolved later
        if (isValuePromise) {
            return value;
        }

        // return new MyPromise so the promise is resolved with a given value
        return new MyPromise(resolve => {
            resolve(value);
        })
    }

    static reject(value) {
        const isValuePromise = value instanceof MyPromise;

        if (isValuePromise) {
            return value;
        }

        return new MyPromise((resolve, reject) => {
            reject(value);
        })
    }
}

module.exports = {MyPromise};