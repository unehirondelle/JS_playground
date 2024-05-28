const fnItself = require('../services/areDeeplyEqual');

module.exports.areDeeplyEqual = (obj1, obj2) => {
    // let isEqual = true;
    // if (obj1 === null || obj2 === null) {
    //     isEqual = obj1 === obj2;
    // } else if (typeof obj1 !== typeof obj2) {
    //     isEqual = false;
    // } else {
    //     for (const k in obj1) {
    //         if (typeof obj1[k] === 'function') {
    //             if (obj1[k].toString() !== obj2[k].toString()) { // will only work for identical functions
    //                 isEqual = false;
    //             }
    //         } else if (typeof obj1[k] === 'object' && obj1[k] !== null) { // array and object
    //             isEqual = fnItself.areDeeplyEqual(obj1[k], obj2[k]); // experiment to mock recursion
    //         } else {
    //             if (!Object.hasOwn(obj2, k) || obj1[k] !== obj2[k]) { // primitives
    //                 isEqual = false;
    //             }
    //         }
    //     }
    // }
    // return isEqual;
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    if (typeof obj1 !== 'object' || obj1 === null || obj2 === null) { //primitives
        return obj1 === obj2;
    }

    if (Array.isArray(obj1) || Array.isArray(obj2)) { // Arrays
        if (String(obj1) !== String(obj2)) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!fnItself.areDeeplyEqual(obj1[i], obj2[i])) {
                return false;
            }
        }
    } else { //Objects
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (const key in obj1) {
            if (!Object.hasOwn(obj2, key)) {
                return false;
            }
            if (!fnItself.areDeeplyEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
    }
    return true;
};

// module.exports.fnItself = areDeeplyEqual;

const {areDeeplyEqual} = fnItself;

// console.log(areDeeplyEqual({a: 1, b: 3}, {a: 1, b: 2})); // false
// console.log(areDeeplyEqual({a: 1, b: 3}, {a: 1, b: 3})); // true
// console.log(areDeeplyEqual({a: 1, b: "3"}, {a: 1, b: "2"})); // false
// console.log(areDeeplyEqual({a: 1, b: "3"}, {a: 1, b: "3"})); // true
// console.log(areDeeplyEqual({a: ["3"], b: 1}, {a: ["2"], b: 1})); // false TODO to fix
// console.log(areDeeplyEqual({a: 1, b: ["3"]}, {a: 1, b: ["3"]})); // true
// console.log(areDeeplyEqual({a: 1, b: {a: {b: 3}}}, {a: 1, b: {a: {b: 3}}})); // true
// console.log(areDeeplyEqual({a: 1, b: {a: {b: 3}}, c: 1}, {a: 1, b: {a: {b: 3}}, c: 1})); // true
// console.log(areDeeplyEqual({a: 1, b: {a: {b: 3}}, c: 1}, {a: 1, b: {a: {b: 3}}, c: 0})); // false
// console.log(areDeeplyEqual({a: () => 1}, {a: () => 1})); // true
// console.log(areDeeplyEqual(undefined, null)); // false
// console.log(areDeeplyEqual({a: undefined}, {a: null})); // false
// console.log(areDeeplyEqual({a: undefined}, {b: null})); // false
// console.log(areDeeplyEqual({a: null}, {a: null})); // true