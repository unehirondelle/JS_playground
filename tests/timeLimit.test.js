const {timeLimit} = require("../services/timeLimit");
describe('timeLimit', () => {
    it('rejects the fn when its time for execution exceeds the limit', () => {
        const fn = async n => {
            await new Promise(res => setTimeout(res, 100));
            return n * n;
        }
        const limit = 50;
        const limitedFn = timeLimit(fn, limit);
        return expect(limitedFn(5)).rejects.toBe('Time Limit Exceeded');
    });

    it('resolves the fn when its time for execution does not exceed the limit', () => {
        const fn = async n => {
            await new Promise(res => setTimeout(res, 10));
            return n * n;
        }
        const limit = 50;
        const limitedFn = timeLimit(fn, limit);
        return expect(limitedFn(5)).resolves.toBe(25);
    });

    it('rejects the promise when fn throws an error', () => {
        const fn = async () => {
            throw 'Error';
        };
        const limit = 50;
        const limitedFn = timeLimit(fn, limit);
        return expect(limitedFn()).rejects.toBe('Error');
    });
});