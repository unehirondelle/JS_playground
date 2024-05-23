const joinArrById = (arr1, arr2) => {
    const map = new Map();

    for (const obj of arr1) {
        map.set(obj.id, obj);
    }

    for (const obj of arr2) {
        if (!map.has(obj.id)) {
            map.set(obj.id, obj);
        } else {
            const prevObj = map.get(obj.id);
            for (const k in obj) { // to ensure the previous obj keeps its keys when the new doesn't have same keys
                prevObj[k] = obj[k];
            }
        }
    }

    const res = new Array();

    for (let key of map.keys()) {
        res.push((map.get(key)));
    }
    return res.sort((a, b) => a.id - b.id);
};

module.exports = {joinArrById};

// console.log(joinArrById(
//     [
//         {"id": 1, "x": 1},
//         {"id": 2, "x": 9}
//     ],
//     [
//         {"id": 3, "x": 5}
//     ]
// ));
// // [
// //     {"id": 1, "x": 1},
// //     {"id": 2, "x": 9},
// //     {"id": 3, "x": 5}
// // ]
//
// console.log(joinArrById(
//     [
//         {"id": 1, "x": 2, "y": 3},
//         {"id": 2, "x": 3, "y": 6}
//     ],
//     [
//         {"id": 2, "x": 10, "y": 20},
//         {"id": 3, "x": 0, "y": 0}
//     ]
// ));
// // [
// //     {"id": 1, "x": 2, "y": 3},
// //     {"id": 2, "x": 10, "y": 20},
// //     {"id": 3, "x": 0, "y": 0}
// // ]
//
// console.log(joinArrById(
//     [
//         {"id": 1, "b": {"b": 94}, "v": [4, 3], "y": 48}
//     ],
//     [
//         {"id": 1, "b": {"c": 84}, "v": [1, 3]}
//     ]
// ));
// // [
// //     {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// // ]
//
// console.log(joinArrById(
//     [
//         {"id": 1, "b": {"c": 84}, "v": [1, 3]}
//     ],
//     [
//         {"id": 1, "b": {"b": 94}, "v": [4, 3], "y": 50}
//     ]
// ));