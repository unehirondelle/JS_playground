const {TimeLimitedCache} = require("../classes/timeLimitedCache");

describe('timeLimitedCache', () => {
    it('sets, gets, and returns count when key does not exist initially', () => {
        const timeLimitedCache = new TimeLimitedCache();
        expect(timeLimitedCache.set(1, 42, 1000)).toBe(false);
        expect(timeLimitedCache.get(1)).toBe(42);
        expect(timeLimitedCache.set(2, "value", 1000)).toBe(false);
        expect(timeLimitedCache.count()).toBe(2);
    });

    it('overwrites value of an existing key if fn sets same key', () => {
        const timeLimitedCache = new TimeLimitedCache();
        expect(timeLimitedCache.set(1, 42, 1000)).toBe(false);
        expect(timeLimitedCache.get(1)).toBe(42);
        expect(timeLimitedCache.set(1, 24, 1000)).toBe(true);
        expect(timeLimitedCache.get(1)).toBe(24);
        expect(timeLimitedCache.count()).toBe(1);
    });

    it('returns -1 when trying to get a non-existing key', () => {
        const timeLimitedCache = new TimeLimitedCache();
        expect(timeLimitedCache.set(1, 42, 1000)).toBe(false);
        expect(timeLimitedCache.get(2)).toBe(-1);
    });

    it('returns -1 when trying to get the key after cache limit is over', () => {
        jest.useFakeTimers();

        expect.assertions(4);

        const timeLimitedCache = new TimeLimitedCache();
        expect(timeLimitedCache.set(1, 42, 1000)).toBe(false);
        expect(timeLimitedCache.get(1)).toBe(42);
        setTimeout(() => {
            expect(timeLimitedCache.get(1)).toBe(-1);
            expect(timeLimitedCache.count()).toBe(0);
        }, 1500);

        jest.runAllTimers();
    });
});