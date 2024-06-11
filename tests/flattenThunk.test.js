const {flattenThunk} = require("../services/flattenThunk");
describe('flattenThunk', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('returns data when no errors', () => {
        const func1 = (cb) => {
            setTimeout(() => cb(null, 'ok'), 10);
        };

        const func2 = (cb) => {
            setTimeout(() => cb(null, func1), 10);
        };

        const func3 = (cb) => {
            setTimeout(() => cb(null, func2), 10);
        };

        jest.runAllTimersAsync();

        flattenThunk(func3)((error, result) => {
            expect(error).toBeUndefined();
            expect(result).toBe('ok');
        });
    });

    it('returns error when error occurs', () => {
        const funcError = (cb) => {
            setTimeout(() => cb('error', undefined), 10);
        };

        const func1 = (cb) => {
            setTimeout(() => cb('error', funcError), 10);
        };

        jest.runAllTimersAsync();

        flattenThunk(func1)((error, result) => {
            expect(error).toBe('error');
            expect(result).toBe(undefined);
        });
    });
});