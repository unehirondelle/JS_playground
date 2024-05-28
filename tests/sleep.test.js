const {sleep} = require("../services/sleep");

describe('sleep', () => {
    it('execute a function not earlier then needed', () => {
        const start = Date.now();
        sleep(500).then(() => expect(Date.now() - start).toBe(500));
    });
});
