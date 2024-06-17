/**
 * @typedef {object} OriginData
 * @property {string} origin
 * @property {number} lastUsed
 * @property {number} size
 * @property {boolean} persistent
 */

class MyLRUStorage {
    /**
     * @param {number} capacity
     * @param {() => number} getTimestamp
     */
    constructor(capacity, getTimestamp) {
        this.capacity = capacity;
        this.getTimestamp = getTimestamp;
        this.LRU = new Map();
        this.persistent = new Set();
        this.totalSize = 0;
    }

    /**
     * @param {string} origin
     * @returns {OriginData | undefined}
     */
    getData(origin) {
        if (!this.LRU.has(origin)) {
            return undefined;
        }
        const size = this.LRU.get(origin);
        this.LRU.delete(origin);
        this.LRU.set(origin, size);
        return size;
    }

    /**
     * @param {string} origin
     * @param {number} size
     * @returns {boolean}
     */
    setData(origin, size) {
        if (size > this.capacity) {
            return false;
        }
        const savedOriginSize = this.LRU.get(origin);
        if (savedOriginSize && savedOriginSize.size >= size) {
            this.LRU.delete(origin);
            this.totalSize = this.totalSize + size - savedOriginSize.size;
            this.LRU.set(origin, {size});
            return true;
        }

        const keysToRemove = [...this.LRU.keys()].filter(key => !this.persistent.has(key)).values();

        while (this.totalSize + size > this.capacity) {
            const evicted = this.evict(keysToRemove);
            if (!evicted) {
                return false;
            }
        }

        this.LRU.set(origin, {size});
        this.totalSize += size;
        return true;
    }

    evict(keysToRemove) {
        const currentKey = keysToRemove.next().value;
        if (!currentKey) {
            return false;
        }
        this.totalSize -= this.LRU.get(currentKey).size;
        this.LRU.delete(currentKey);
        return true;
    }

    /**
     * @param {string} origin
     * @returns {void}
     */
    clearData(origin) {
        this.persistent.delete(origin);
        const size = this.LRU.get(origin);
        if (size && size.size) {
            this.totalSize -= size.size;
        }
        this.LRU.delete(origin);
    }

    /**
     * @param {string} origin
     * @returns {void}
     */
    makePersistent(origin) {
        this.persistent.add(origin);
    }
}

module.exports = {MyLRUStorage};