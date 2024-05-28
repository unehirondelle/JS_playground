const {throttle} = require("../services/throttle");

describe('throttle', () => {
    jest.useFakeTimers();

    it('calls the second fn after a delay', () => {
        const start = Date.now();
        const mock = jest.spyOn(console, 'log');

        const throttled = throttle((value) => mock(value, Date.now() - start), 2000);

        throttled();
        throttled('second');

        jest.runOnlyPendingTimers();

        expect(mock).toHaveBeenCalledTimes(2);
        expect(console.log.mock.calls[1]).toEqual(['second', 2000]);
    });

    it('only calls fn 2 times despite it attempted to call it 5 times within a given delay', () => {
        expect.assertions(4);
        const mock = jest.fn();
        const throttled = throttle(mock, 2000);
        expect(mock).not.toHaveBeenCalled();

        for (let i = 0; i < 5; i++) {
            if (i === 4) {
                throttled(2)
            } else {
                throttled(1);
            }
        }

        jest.runOnlyPendingTimers();

        expect(mock).toBeCalled();
        expect(mock).toHaveBeenCalledTimes(2);
        expect(mock).toHaveBeenNthCalledWith(2, 2);
    });

});

