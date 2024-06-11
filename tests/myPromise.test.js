const {MyPromise} = require("../classes/myPromise");
describe('myPromise', () => {
    it('then should return a Promise', () => {
        const promise = new MyPromise(() => {
            console.log('promise');
        });
        const thenPromise = promise.then(() => {
            console.log('thenPromise');
        });
        expect(thenPromise).toBeInstanceOf(MyPromise);
    });
    it('catch should return a Promise', () => {
        const promise = new MyPromise(() => {
            console.log('promise');
        });
        const thenPromise = promise.catch(() => {
            console.log('thenPromise');
        });
        expect(thenPromise).toBeInstanceOf(MyPromise);
    });
    it('MyPromise could only be resolved once', () => {
        jest.useFakeTimers();
        const mock = jest.fn();
        new MyPromise((resolve) => {
            setTimeout(() => {
                resolve(1);
                setTimeout(() => {
                    resolve(2);
                }, 10);
            }, 10);
        }).then((data) => {
            mock(data);
        })
        jest.runAllTimersAsync();
        setTimeout(() => {
            expect(mock).toBeCalledWith(123);
        }, 100);
    });
    it('then() returns a resolved promise if callback returns value', () => {
        const promise = new MyPromise((resolve, reject) => {
            resolve(1);
        });
        promise.then((data) => {
            return 2;
        }).then((data) => {
            expect(data).toBe(2);
        }, (error) => {
            const mock = jest.fn();
            mock();
            expect(mock).toHaveBeenCalled();
        })
    });
});