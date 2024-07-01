const {log} = require("./log");
const semverCompare = (v1, v2) => {
    // const [version1, ...rest1] = v1.split('.');
    // const [version2, ...rest2] = v2.split('.');
    //
    // const num1 = Number(version1);
    // const num2 = Number(version2);
    //
    // log(`version1: ${version1}, rest1: ${JSON.stringify(rest1)}`);
    // if (num1 > num2) {
    //     return 1;
    // } else if (num1 < num2) {
    //     return -1
    // } else if (rest1[0] !== undefined) {
    //     return semverCompare(rest1.join('.'), rest2.join('.')); // too complicated
    // } else {
    //     return 0;
    // }

    //alternative
    // const version1 = v1.split('.').map(el => Number(el));
    // const version2 = v2.split('.').map(el => Number(el));
    //
    // for (let i = 0; i < 3; i++) {
    //     if (version1[i] > version2[i]) {
    //         return 1;
    //     }
    //     if (version1[i] < version2[i]) {
    //         return -1;
    //     }
    // }
    // return 0;


    let p1 = 0;
    let buffer1 = '';
    let p2 = 0;
    let buffer2 = '';

    // no need to split the whole str and allocate memory for arrays - only process what is needed and exit early if possible
    while (p1 < v1.length || p2 < v2.length) {
        while (v1[p1] !== '.' && p1 < v1.length) {
            buffer1 += v1[p1];
            p1++;
            log(`buffer1: ${buffer1}`);
        }
        while (v2[p2] !== '.' && p2 < v2.length) {
            buffer2 += v2[p2];
            p2++;
            log(`buffer2: ${buffer2}`);
        }

        if (Number(buffer1) > Number(buffer2)) {
            return 1;
        } else if (Number(buffer1) < Number(buffer2)) {
            return -1;
        } else {
            p1++;
            p2++;
            buffer1 = '';
            buffer2 = '';
        }
    }

    return 0;
};

module.exports = {semverCompare};