const {debounce} = require("../services/debounce");

describe('debounce', () => {
    it('cancels the first call with second and returns result', () => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
        jest.spyOn(Date, 'now');
        let start = Date.now();

        const log = (...inputs) => {
            expect([Date.now() - start, inputs]).toEqual([125, [2]]);
        };

        const dlog = debounce(log, 50);

        setTimeout(() => dlog(1), 50);
        setTimeout(() => dlog(2), 75);
        expect(setTimeout).toBeCalledTimes(2);
        expect(Date.now).toBeCalledTimes(1);
    });
});