const {compose} = require("../services/compose");

describe('compose', () => {
    it('returns all given functions results added', () => {
        const fns = [x => x + 1, x => 2 * x];
        const res = 9;
        expect(compose(fns)(4)).toBe(res);
    });
    it('returns initial value given an empty array of functions', () => {
        const fns = [];
        const res = 4;
        expect(compose(fns)(4)).toBe(res);
    });
    it('returns all given functions results added', () => {
        const fns = [x => x + 1, x => 2 * x, x => 3 * x];
        const res = 25;
        expect(compose(fns)(4)).toBe(res);
    });
});
