const {throttlePromises} = require("../services/throttlePromises");
describe('throttlePromises', () => {
    it('should return a Promise', () => {
        expect(throttlePromises([], 5) instanceof Promise).toBe(true);
    });
    it('should resolve as Promise.all', () => {
        jest.useFakeTimers();
        let value = 0;
        const asyncFactory = function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(value++);
                }, 10);
            });
        };

        const arr = [];
        jest.runAllTimersAsync();
        for (let i = 0; i < 20; i++) {
            arr.push(asyncFactory);
        }
        const throttled = throttlePromises(arr, 5);
        throttled.then(function (results) {
            expect(results).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
        });
    });
    it('should have maximum 5 pending promises at a time', () => {
        jest.useFakeTimers();
        const mockTooManyCalls = jest.fn();
        let value = 0;
        let inProgress = 0;
        const asyncFactory = function () {
            inProgress++;

            if (inProgress > 5) {
                mockTooManyCalls();
            }

            return new Promise(function (resolve) {
                setTimeout(function () {
                    inProgress--;
                    resolve(value++);
                }, 10);
            });
        };

        jest.runAllTimersAsync();
        const arr = [];
        for (let i = 0; i < 20; i++) {
            arr.push(asyncFactory);
        }
        const throttled = throttlePromises(arr, 5);
        throttled.then(function (results) {
            expect(mockTooManyCalls).not.toHaveBeenCalled();
        });
    });
    it('should trigger error when it occurs', () => {
        jest.useFakeTimers();
        const success = () => new Promise((resolve) => {
            setTimeout(() => resolve(1), 10);
        });
        const fail = (val) => () => new Promise((_, reject) => {
            setTimeout(() => reject(val), 100);
        });
        const throttled = throttlePromises([
            success,
            success,
            fail('error1'),
            fail('error2'),
            success
        ], 5);
        throttled.then(function (results) {
            const mock = jest.fn();
            mock();
            expect(mock).not.toHaveBeenCalled();
        }).catch((error) => {
            expect(error).toBe('error1');
        });
    });
});