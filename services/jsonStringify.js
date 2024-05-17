const jsonStringify = (val) => {
    if (val === null || val === undefined) { // real JSON.parse would throw an error for 'undefined' even though JSON.stringify doesn't complaint
        return String(val);
    }

    if (typeof val === 'function') { // functions cannot be stringify
        return;
    }

    if (typeof val === 'string') {
        return `"${val}"`;
    }

    if (Array.isArray(val)) { // array
        return `[${val.map(el => jsonStringify(el)).join(',')}]`;

    }

    if (typeof val === 'object') {
        const entries = Object.entries(val);
        return `{${entries.map(([k, v]) => `"${k}":${jsonStringify(v)}`)}}`
    }

    if (typeof val !== 'object') { // boolean, number
        return String(val);
    }
};

// console.log(jsonStringify(null));
// console.log(jsonStringify(undefined));
// console.log(jsonStringify('string'));
// console.log(jsonStringify(0));
// console.log(jsonStringify(true));
// console.log(jsonStringify(() => 1));
console.log(jsonStringify({a: 1, b: {c: 2}}));
const value = jsonStringify([1, 2, [3], 4, {a: 1}]);
console.log("VALUE:", value, ",PARSED:", JSON.parse(value));
