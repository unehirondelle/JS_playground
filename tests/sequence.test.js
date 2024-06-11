const {sequence} = require("../services/sequence");
describe('sequence', () => {
    const times2 = (callback, num) => {
        setTimeout(() => callback(null, num * 2), 100)
    }

    const times3 = (callback, num) => {
        setTimeout(() => callback(null, num * 3), 100)
    }

    const plus2 = (callback, num) => {
        setTimeout(() => callback(null, num + 2), 100)
    }

    beforeAll(() => {
        jest.useFakeTimers();
    })

    it('should return expected given times, times, plus sequence', () => {
        const thunk = sequence([times2, times3, plus2]);
        jest.runAllTimersAsync();
        const cb = (error, data) => {
            expect(data).toBe(8);
        };
        thunk(cb, 1);
    });
    it('should return expected given times, plus, times sequence', () => {
        const thunk = sequence([times2, plus2, times3]);
        jest.runAllTimersAsync();
        const cb = (error, data) => {
            expect(data).toBe(6);
        };
        thunk(cb, 1);
    });
    it('should work for async without data', () => {
        const noop = (callback) => setTimeout(callback, 10);
        const thunk = sequence([noop, noop, noop]);
        jest.runAllTimersAsync();
        thunk((error, data) => {
            expect(error).toBeUndefined();
            expect(data).toBeUndefined();
        });
    });
    it('should skip uncalled functions when error occurs', () => {
        const triggerError = (callback) => setTimeout(() => callback(new Error('error')), 10);
        const mock1 = jest.fn();
        const asyncFunc1 = (callback) => {
            mock1();
            setTimeout(callback, 10);
        }
        const mock2 = jest.fn();
        jest.runAllTimersAsync();
        const thunk = sequence([asyncFunc1, triggerError, mock2]);
        thunk((error, data) => {
            expect(error.message).toBe('error');
            expect(mock1).toHaveBeenCalled();
            expect(mock2).not.toHaveBeenCalled();
        })
    });
});

