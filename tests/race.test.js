const {race} = require("../services/race");
describe('race', () => {
    it('returns first returned result', () => {
        jest.useFakeTimers();
        const async1 = (callback) => {
            setTimeout(() => callback(undefined, 1), 300)
        }

        const async2 = (callback) => {
            setTimeout(() => callback(undefined, 2), 100)
        }

        const async3 = (callback) => {
            setTimeout(() => callback(undefined, 3), 200)
        }


        jest.runAllTimersAsync();
        const first = race(
            [
                async1,
                async2,
                async3
            ]
        )

        first((error, data) => {
            expect(data).toBe(2);
        }, 1)
    });
});