const {arrayShuffle} = require("../services/arrayShuffle");
describe('arrayShoft', () => {
    it('returns expected standard deviation', () => {
        const count = new Map()
        const total = 100000
        for (let i = 0; i < total; i++) {
            const arr = [1, 2, 3, 4]
            arrayShuffle(arr)

            const result = arr.join('_')
            if (count.has(result)) {
                count.set(result, count.get(result) + 1)
            } else {
                count.set(result, 1)
            }
        }

// calculate the standard deviation
        const avg = total / 24

        let d = 0
        for (let i of count.values()) {
            d += (i - avg) ** 2
        }

        const sd = Math.sqrt(d / 24)
        expect(sd).toBeLessThanOrEqual(100)
    });
});