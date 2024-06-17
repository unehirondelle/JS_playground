const {MyLRUStorage} = require("../classes/myLRUStorage");
describe('myLRUStorage', () => {
    let storage;
    beforeEach(() => {
        const getTimeStamp = () => Date.now();
        storage = new MyLRUStorage(10, getTimeStamp);
    });

    it('should return expected when there is enough space', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.setData('c', 6)
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b').size).toBe(3)
        expect(storage.getData('c').size).toBe(6);
    });
    it('should evict the least recently used data', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.setData('c', 7)
        expect(storage.getData('a')).toBeUndefined()
        expect(storage.getData('b').size).toBe(3)
        expect(storage.getData('c').size).toBe(7)
    });
    it('should not store data is not enough space even after eviction', () => {
        storage.setData('a', 1)
        storage.setData('b', 2)
        storage.setData('c', 3)
        const result = storage.setData('d', 11)
        expect(result).toBe(false)
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b').size).toBe(2)
        expect(storage.getData('c').size).toBe(3)
        expect(storage.getData('d')).toBeUndefined()
    });
    it('setData() should update storage data', () => {
        storage.setData('a', 1)
        storage.setData('b', 2)
        storage.setData('c', 3)
        expect(storage.getData('c').size).toBe(3)
    });
    it('getData() should be treated as "use data"', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.getData('a')
        storage.setData('c', 7)
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b')).toBeUndefined()
        expect(storage.getData('c').size).toBe(7)
    });
    it('setData() should be treated as "use data"', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.setData('a', 1)
        storage.setData('c', 7)
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b')).toBeUndefined()
        expect(storage.getData('c').size).toBe(7)
    });
    it('should use setData() to shrink size', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.setData('c', 6)
        storage.setData('c', 1)
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b').size).toBe(3)
        expect(storage.getData('c').size).toBe(1)
    });
    it('setData(0 should cause an automatic eviction', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.setData('c', 6)
        storage.setData('c', 10)
        expect(storage.getData('a')).toBeUndefined()
        expect(storage.getData('b')).toBeUndefined()
        expect(storage.getData('c').size).toBe(10)
    });
    it('setData() with too big size might cause failure', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.setData('c', 6)
        const result = storage.setData('c', 11)
        expect(result).toBe(false)
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b').size).toBe(3)
        expect(storage.getData('c').size).toBe(6)
    });
    it('persistent data should not be evicted', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.makePersistent('a')
        storage.setData('c', 7)
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b')).toBeUndefined()
        expect(storage.getData('c').size).toBe(7)
    });
    it('persistent data might takes up the space', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.makePersistent('a')
        storage.makePersistent('b')
        const result = storage.setData('c', 7)
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b').size).toBe(3)
        expect(result).toBe(false)
        expect(storage.getData('c')).toBeUndefined()
    });
    it('should not evict itself when updating size', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.setData('c', 6)
        const result = storage.setData('a', 4)
        expect(result).toBe(true)
        expect(storage.getData('a').size).toBe(4)
        expect(storage.getData('b')).toBeUndefined()
        expect(storage.getData('c').size).toBe(6)
    });
    it('should be able to clearData()', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.setData('c', 6)
        storage.clearData('b')
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b')).toBeUndefined()
        expect(storage.getData('c').size).toBe(6)
    });
    it('clearData() should create more available space', () => {
        storage.setData('a', 1)
        storage.setData('b', 3)
        storage.makePersistent('a')
        storage.makePersistent('b')
        const result = storage.setData('c', 7)
        expect(result).toBe(false)
        storage.clearData('b')
        storage.setData('c', 7)
        expect(storage.getData('a').size).toBe(1)
        expect(storage.getData('b')).toBeUndefined()
        expect(storage.getData('c').size).toBe(7)
    });
});