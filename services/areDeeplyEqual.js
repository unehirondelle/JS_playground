const areDeeplyEqual = (o1, o2) => {
    let isEqual = true;
    const callback = (obj1, obj2) => {
        for (const k in obj1) {
            if (["string", "boolean", "number", "undefined"].includes(typeof obj1[k]) || obj1[k] === null) {
                if (obj1[k] !== obj2[k]) {
                    isEqual = false;
                }
            } else {
                callback(obj1[k],obj2[k]);
            }
        }
    };
    callback(o1, o2);
    return isEqual;
};

console.log(areDeeplyEqual({a: 1, b: 3}, {a: 1, b: 2}));
console.log(areDeeplyEqual({a: 1, b: 3}, {a: 1, b: 3}));
console.log(areDeeplyEqual({a: 1, b: "3"}, {a: 1, b: "2"}));
console.log(areDeeplyEqual({a: 1, b: "3"}, {a: 1, b: "3"}));
console.log(areDeeplyEqual({a: 1, b: ["3"]}, {a: 1, b: ["2"]}));
console.log(areDeeplyEqual({a: 1, b: ["3"]}, {a: 1, b: ["3"]}));
console.log(areDeeplyEqual({a: 1, b: {a: {b: 3}}}, {a: 1, b: {a: {b: 3}}}));
console.log(areDeeplyEqual({a: 1, b: {a: {b: 3}}, c: 1}, {a: 1, b: {a: {b: 3}}, c: 1}));
console.log(areDeeplyEqual({a: 1, b: {a: {b: 3}}, c: 1}, {a: 1, b: {a: {b: 3}}, c: 0}));