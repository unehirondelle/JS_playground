const immutabilityHelper = (data, command) => {
    for (const [key, value] of Object.entries(command)) {
        switch (key) {
            case '$push':
                return [...data, ...value];
            case '$set':
                return value;
            case '$merge':
                if (!(data instanceof Object)) {
                    throw Error("bad merge");
                }
                return {...data, ...value};
            case '$apply':
                return value(data);
            default:
                if (Array.isArray(data)) {
                    const res = [...data];
                    res[key] = immutabilityHelper(data[key], value);
                    return res;
                } else {
                    return {
                        ...data,
                        [key]: immutabilityHelper(data[key], value)
                    }
                }
        }
    }
};

module.exports = {immutabilityHelper};

// immutabilityHelper([1], {$push: [2, 3]}) //[1,2,3]
// immutabilityHelper({a: [1]}, {a: {$push: [2, 3]}}) //{a:[1,2,3]}
// // $push on non-array should throw error
// immutabilityHelper([1], {1: {$set: 2}}) //[1,2]
// immutabilityHelper({a: {b: 1}}, {a: {b: {$set: 2}}}) //{a:{b:2}}
// immutabilityHelper({a: {b: 1}}, {a: {$merge: {c: 3}}}) //{a:{b:1,c:3}}
// immutabilityHelper({a: {c: 1}}, {a: {$merge: {c: 3}}}) //{a:{c:3}}
// // $merge on non-object should throw error
// immutabilityHelper([1], {0: {$apply: (item) => item * 2}}) //[2]