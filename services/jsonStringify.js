const jsonStringify = (val) => {
    if ([null, undefined, Infinity, -Infinity, NaN].includes(val)) {
        return 'null';
    }

    if (typeof val === 'bigint') {
        throw Error('bigints are not supported');
    }

    if (typeof val === 'function' || typeof val === 'symbol') { // functions cannot be stringify
        return;
    }

    if (typeof val === 'string') {
        return `"${val}"`;
    }

    if (Array.isArray(val)) { // array
        return `[${val.map(el => {
            if (typeof el === 'symbol') {
                return 'null'
            } else {
                return jsonStringify(el);
            }
        }).join(',')}]`;

    }

    if (typeof val === 'object') {
        if (val instanceof Date) {
            return `"${val.toISOString()}"`;
        }
        const entries = Object.entries(val).filter(([k, v]) => v !== undefined || typeof v === 'symbol');
        return `{${entries.map(([k, v]) => `"${k}":${jsonStringify(v)}`)}}`
    }

    if (typeof val !== 'object') { // boolean, number
        return String(val);
    }
};

module.exports = {jsonStringify};

// console.log(jsonStringify(null));
// console.log(jsonStringify(undefined));
// console.log(jsonStringify('string'));
// console.log(jsonStringify(0));
// console.log(jsonStringify(true));
// console.log(jsonStringify(() => 1));
// console.log(jsonStringify({a: 1, b: {c: 2}}));
// const value = jsonStringify([1, 2, [3], 4, {a: 1}]);
// console.log("VALUE:", value, ",PARSED:", JSON.parse(value));
