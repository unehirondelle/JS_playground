const {findArrayMedian} = require("../services/findArrayMedian");
describe('findArrayMedian', () => {
    it('should returns expected for even length array', () => {
        const arr1 = [31, 190, 233, 246, 336, 367, 441, 444, 469, 591, 622, 676, 712, 762, 784, 800, 833, 880];
        const arr2 = [589, 940];
        const merged = [...arr1, ...arr2];
        const actual = findArrayMedian(arr1, arr2);

        merged.sort((a, b) => a - b);
        const expected = (
            merged[Math.floor((merged.length - 1) / 2)] + merged[Math.ceil((merged.length - 1) / 2)]) / 2;
        expect(actual).toBe(expected);
    });
    it('should returns expected for odd length array', () => {
        const arr1 = [16,112,267,373,406,413,470,606,657,765,775,980];
        const arr2 = [45,81,163,178,279,473,558,591,729,848,883,911];
        const merged = [...arr1, ...arr2];
        const actual = findArrayMedian(arr1, arr2);

        merged.sort((a, b) => a - b);
        const expected = (
            merged[Math.floor((merged.length - 1) / 2)] + merged[Math.ceil((merged.length - 1) / 2)]) / 2;
        expect(actual).toBe(expected);
    });
    it('should returns expected for odd length array #2', () => {
        const arr1 = [120,167,194,302,404,635,681,703,738,848,855,913,989];
        const arr2 = [188,331,337,350,575,836];
        const merged = [...arr1, ...arr2];
        const actual = findArrayMedian(arr1, arr2);

        merged.sort((a, b) => a - b);
        const expected = (
            merged[Math.floor((merged.length - 1) / 2)] + merged[Math.ceil((merged.length - 1) / 2)]) / 2;
        expect(actual).toBe(expected);
    });
});