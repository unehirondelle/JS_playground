const findSingle = arr => {
    const object = {};
    arr.forEach(num => {
        if (Object.hasOwn(object, num)) {
            object[num]++;
        } else {
            object[num] = 1;
        }
    });

    for (const key in object) {
        if (object[key] === 1) {
            return Number(key);
        }
    }
};
module.exports = {findSingle};