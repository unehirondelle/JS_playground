const {cancellableInterval} = require("../services/cancellable");
describe('cancellableInterval', () => {
    it('cancels interval when fn called', () => {
        const result = [];

        const fn = (x) => x * 2;
        const args = [4];
        const t = 35;
        const cancelTimeMs = 190;

        const start = performance.now();

        const log = (...argsArr) => {
            const diff = Math.floor(performance.now() - start);
            result.push({"time": diff, "returned": fn(...argsArr)});
        }

        const cancel = cancellableInterval(log, args, t);

        setTimeout(cancel, cancelTimeMs);

        setTimeout(() => {
            expect(result).toEqual([
                {"time": 0, "returned": 8},
                {"time": 35, "returned": 8},
                {"time": 70, "returned": 8},
                {"time": 105, "returned": 8},
                {"time": 140, "returned": 8},
                {"time": 175, "returned": 8}
            ]);
        }, cancelTimeMs + t + 15);
    });
});