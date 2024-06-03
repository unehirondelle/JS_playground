const {excludeItems} = require("../services/excludeItems");
describe('excludeItems', () => {
    it('should return an array', () => {
        expect(Array.isArray(excludeItems([], []))).toBe(true);
    });
    it('should return expected result', () => {
        let items = [
            {color: 'red', type: 'tv', age: 18},
            {color: 'silver', type: 'phone', age: 20},
            {color: 'blue', type: 'book', age: 17}
        ]

        const excludes = [
            {k: 'color', v: 'silver'},
            {k: 'type', v: 'tv'},
        ]
        expect(excludeItems(items, excludes)).toEqual(items.slice(2));
    });

    it('should support multiple v for the same k', () => {
        let items = [
            {color: 'red', type: 'tv', age: 18},
            {color: 'silver', type: 'phone', age: 20},
            {color: 'blue', type: 'book', age: 17}
        ]

        const excludes = [
            {k: 'color', v: 'silver'},
            {k: 'color', v: 'red'}
        ]
        expect(excludeItems(items, excludes)).toEqual(items.slice(2))
    });

    it('should work even exclude array is empty', () => {
        let items = [
            {color: 'red', type: 'tv', age: 18},
            {color: 'silver', type: 'phone', age: 20},
            {color: 'blue', type: 'book', age: 17}
        ]
        expect(excludeItems(items, [])).toEqual(items)
    });
});