const isObject = (obj) => {
    return obj !== null && typeof obj === 'object';
};

const jsonToMatrix = arr => {
    // arr = array of objects or arrays
    // first row - sorted keys
    // each following row - values sorted in keys' order; if no matching value - ""
    // for nested objects key should look like 'a.b'

    const getKeys = (obj, path) => {
        for (const k in obj) {
            const newPath = path ? `${path}.${k}` : k; // initially path would be ''
            if (isObject(obj[k])) { // recursion in case value isn't a primitive
                getKeys(obj[k], newPath);
            } else {
                keySet.add(newPath);
            }
        }
    };

    const getValues = (obj, path, keyToVal) => {
        for (const k in obj) {
            const newPath = path ? `${path}.${k}` : k; // initially path would be ''
            if (isObject(obj[k])) { // recursion in case value isn't a primitive
                getValues(obj[k], newPath, keyToVal);
            } else {
                keyToVal[newPath] = obj[k];
            }
        }
    };

    const keySet = new Set(); // to ensure a uniqueness of keys

    arr.forEach(el => getKeys(el, ''));

    const keys = Array.from(keySet).sort(); // first row

    const matrix = [keys]; // no spread operator as we need an array of arrays

    for (const obj of arr) {
        const keyToVal = {};

        getValues(obj, '', keyToVal);

        const row = [];

        for (const key of keys) {
            if (key in keyToVal) {
                row.push(keyToVal[key]);
            } else {
                row.push("");
            }
        }
        matrix.push(row);
    }

    return matrix;
};

console.log(jsonToMatrix([{b: 1, a: 2}, {b: 3, a: 4}])); //[["a", "b"], [2, 1], [4, 3]];
console.log(jsonToMatrix([{a: 1, b: 2}, {c: 3, d: 4}, {}])); // [["a", "b", "c", "d"], [1, 2, "", ""], ["", "", 3, 4], ["","","",""]];