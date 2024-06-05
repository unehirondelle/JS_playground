const detectType = data => {
    // if (data === null) {
    //     return 'null';
    // }
    //
    // if (typeof data === 'object') {
    //     if (Array.isArray(data)) {
    //         return 'array';
    //     }
    //
    //     if (data instanceof Number) {
    //         return 'number';
    //     }
    //
    //     if (data instanceof String) {
    //         return 'string';
    //     }
    //
    //     if (data instanceof Boolean) {
    //         return 'boolean';
    //     }
    //
    //     if (data instanceof ArrayBuffer) {
    //         return 'arraybuffer';
    //     }
    //
    //     if (data instanceof Date) {
    //         return 'date';
    //     }
    //
    //     if (data instanceof Map) {
    //         return 'map';
    //     }
    //
    //     if (data instanceof Set) {
    //         return 'set';
    //     }
    //
    //     return 'object';
    //
    // } else {
    //     return typeof data;
    // }



    return Object.prototype.toString.call(data).slice(1, -1).split(' ')[1].toLowerCase();
};

module.exports = {detectType};