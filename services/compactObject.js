const isObject = (obj) => {
    return typeof obj === 'object' && obj !== null;
}

const compactObject = (obj) => {
    // recursion
    if (!obj) {
        return false;
    }

    if (!isObject(obj)) { //primitive
        return obj;
    }

    if (Array.isArray(obj)) {
        const res = [];
        for (const el of obj) {
            const subRes = compactObject(el);
            if (subRes) {
                res.push(subRes);
            }
        }

        return res;
    }

    const res = {};

    for (const k in obj) {
        const subRes = compactObject(obj[k]);
        if (subRes) {
            res[k] = subRes;
        }
    }

    return res;
}

module.exports = {compactObject};
// iterative deep-first search
//     const stack = [[obj, Array.isArray(obj) ? [] : {}]];
//
//     let res = stack[0][1];
//     while (stack.length > 0) {
//
//         const [currObj, newObj] = stack.pop();
//
//         for (const k in currObj) {
//             const val = currObj[k];
//
//             if (!val) {
//                 continue;
//             }
//
//             if (!isObject(val)) { // primitive
//                 Array.isArray(newObj) ? newObj.push(val) : newObj[k] = val;
//                 continue;
//             }
//
//             const subRes = Array.isArray(val) ? [] : {};
//
//             Array.isArray(newObj) ? newObj.push(subRes) : newObj[k] = subRes;
//             stack.push([val, subRes]);
//         }
//
//     }
//     return res;
// };
//
// console.log(compactObject([null, 0, false, 1])) //[1]
// console.log(compactObject({"a": null, "b": [false, 1]})) //{"b": [1]}
// console.log(compactObject([null, 0, 5, [0], [false, 16]])) //[5, [], [16]]