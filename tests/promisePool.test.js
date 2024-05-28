const {promisePool} = require("../services/promisePool");


describe('promisePool', () => {
    it('executes an expected number of promises in a given timeframe', () => {
        const start = Date.now();
        const res = [];
        const sleep = t => new Promise(resolve => setTimeout(() => resolve(res.push(Date.now())), t));
        const fn1 = () => sleep(500);
        const fn2 = () => sleep(400);
        return promisePool([fn1, fn2], 1).then(() => {
            const fn1ResolutionTime = res[0] - start;
            const fn2ResolutionTime = res[1] - res[0];
            expect((fn1ResolutionTime) >= 500 && (fn1ResolutionTime) < 900);
            expect((fn2ResolutionTime) >= 400 && (fn2ResolutionTime) < 900);
            expect(Date.now() - start).toBeGreaterThan(900);
        });
    });
});
