const {addTwoPromises} = require('../services/addTwoPromises');

describe('addTwoPromises', () => {
    it('should return a positive value when both promises resolve positive with values', () => {
        return addTwoPromises(
            new Promise(resolve => setTimeout(() => resolve(2), 20)),
            new Promise(resolve => setTimeout(() => resolve(5), 60))
        ).then(res => expect(res).toBe(7));
    });

    it('should return a negative value when promises resolve with  ', () => {
        return addTwoPromises(
            new Promise(resolve => setTimeout(() => resolve(10), 20)),
            new Promise(resolve => setTimeout(() => resolve(-12), 60))
        ).then(res => expect(res).toBe(-2));
    });
});