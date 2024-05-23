const isObject = (obj) => {
    return obj !== null && typeof obj === 'object';
};

const isObjectEmpty = obj => {
    for (const k in obj) {
        return false;
    }
    return true;
}

const objDiff = (o1, o2) => {
    // only care about the common keys
    if (!isObject(o1) && !isObject(o2)) { // both are primitives
        return o1 === o2 ? {} : [o1, o2]
    }

    if (!isObject(o1) || !isObject(o2)) { // one is primitive
        return [o1, o2];
    }

    // both aren't primitives objects
    if (Array.isArray(o1) !== Array.isArray(o2)) { // one arr, one obj
        return [o1, o2];
    }

    //both are obj -=> recursion
    const diff = {};

    for (const k in o1) {
        if (Object.hasOwn(o2, k)) {
            const childDiff = objDiff(o1[k], o2[k]);
            if (!isObjectEmpty(childDiff)) {
                diff[k] = childDiff;
            }
        }
    }

    return diff;
};

module.exports = {objDiff};

// console.log(objDiff(
//     {a: 1, v: 3, x: [], z: {a: null}},
//     {a: 2, v: 4, x: [], z: {a: 2}}
// )); // {a: [1, 2], v: [3, 4], z: {a:[null, 2]}}
//
// console.log(objDiff(
//     {a: 5, v: 6, z: [1, 2, 4, [2, 5, 7]]},
//     {a: 5, v: 7, z: [1, 2, 3, [1]]}
// ));
// // {
// //     v: [6, 7],
// //     z: {
// //         2: [4, 3],
// //         3: {
// //             0: [2, 1]
// //         }
// //     }
//
//
// console.log(objDiff(
//     {a: {b: 1}},
//     {a: [5]}
// ));//{a:[{b:1}, 5]}
//
// console.log(objDiff(
//     {a: [1, 2, {}], b: false},
//     {b: false, a: [1, 2, {}]}
// ));//{}