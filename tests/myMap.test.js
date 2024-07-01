require('../services/myMap');

describe('myMap', () => {
    it('should return array based on given fn', () => {
        const arr = [1, 2, 3];
        const callback = (item) => item * 2;
        expect(arr.myMap(callback)).toEqual(arr.map(callback));
    });
    it('should return an array based on given fn for elements of different types', () => {
        const arr = [10, -1, '1'];
        const callback = (item) => '1' + item;
        expect(arr.myMap(callback)).toEqual(arr.map(callback));
    });
    it('should pass arguments', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const callback = (a, b, c) => {
            return [a, b, c];
        };
        expect(arr.myMap(callback)).toEqual(arr.map(callback));
    });
    it('should support this', () => {
        const arr = [1, 2];
        const callback = function () {
            return this.foo;
        };
        const thisObj = {foo: 'bar'};
        expect(arr.myMap(callback, thisObj)).toEqual(arr.map(callback, thisObj));
    });
    it('should transform this to object', () => {
        const arr = [1];
        const callback = function () {
            return this;
        };
        const result = arr.myMap(callback, 3);
        expect(Object.prototype.toString.call(result[0])).toBe('[object Number]');

        const result2 = arr.myMap(callback, true);
        expect(Object.prototype.toString.call(result2[0])).toBe('[object Boolean]');

        const result3 = arr.myMap(callback, '3');
        expect(Object.prototype.toString.call(result3[0])).toBe('[object String]');
    });
    it('should ignore empty indexes', () => {
        const arr = new Array(5)
        arr[0] = 1;
        arr[2] = undefined;
        arr[4] = null;

        const callback = item => item;
        const result = arr.myMap(callback);
        expect(result[0]).toBe(1);
        expect('1' in result).toBe(false);
        expect('2' in result).toBe(true);
        expect(result[2] === undefined).toBe(true);
        expect('3' in result).toBe(false);
        expect('4' in result).toBe(true);
        expect(result[4] === null).toBe(true);
    });
    it('should fix mapped item count in the beginning', () => {
        const arr = [1, 2, 3];
        const arr2 = [1, 2, 3];

        const callback = (item, i, array) => {
            array.push(1);
            return item;
        };

        expect(arr.myMap(callback)).toEqual(arr2.map(callback));
    });
    it('should alter mapped items on the fly', () => {
        const arr = [1, 2, 3];
        const arr2 = [1, 2, 3];

        const callback = (item, i, array) => {
            array[1] = 4;
            array[2] = 6;
            return item;
        };

        expect(arr.myMap(callback)).toEqual(arr2.map(callback));
    });
    it('should throw an error if first argument is not a function', () => {
        const arr = [1, 2, 3];

        const callback = 1;
        expect(() => arr.myMap(callback)).toThrow();
    });
});