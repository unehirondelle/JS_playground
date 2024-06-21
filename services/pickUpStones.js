const {log} = require("./log");
const pickUpStones = (num, isA = true) => {
    //recursion from top to bottom - works bad for big numbers as it calculates all steps for each iteration
    //    const player = v => v ? 'A' : 'B';
    //
    //    const curPlayer = player(isA);
    //    const anotherPlayer = player(!isA);
    //
    //    if (num === 1) {
    //        // log(`BASE 1 num: ${num} | player: ${player(isA)} -> ${isA ? 'B' : 'A'} wins`);
    //        return isA ? 'B' : 'A';
    //    }
    //
    //    if (num === 2) {
    //        // log(`BASE 2 num: ${num} | player: ${player(isA)} -> ${isA ? 'A' : 'B'} wins`);
    //        return isA ? 'A' : 'B';
    //    }

    // const takesOne = pickUpStones(num - 1, !isA);
    // const takesTwo = pickUpStones(num - 2, !isA);
    // const res = takesOne === curPlayer || takesTwo === curPlayer ? curPlayer : anotherPlayer
    // log(`>> num: ${num} | player: ${curPlayer} | takesOne(${num - 1}, ${anotherPlayer}): ${takesOne} | takesTwo(${num - 2}, ${anotherPlayer}): ${takesTwo} ->  ${res} wins`)
    // return res;


    // loop from bottom to top (sliding window) - you only need to calculate first 2 iterations and make the decision based on those results
    if (num === 1) {
        return 'B';
    }

    if (num === 2) {
        return 'A';
    }

    // BASE CASES for next step when num===3:
    let takesOne = 'B'; // i-2 | num=3-2=1
    let takesTwo = 'A'; // i-1 | num=3-1=2
    let res;
    for (let i = 3; i <= num; i++) {
        res = takesOne === 'A' && takesTwo === 'A' ? 'B' : 'A'; //i===3
        log(`---BEGINS WITH-- i: ${i} | takesOne: ${takesOne} | takesTwo: ${takesTwo} | res: ${res}`);
        takesOne = takesTwo; // i-2 for next iteration when i===4 | num=4-2=2
        takesTwo = res; // i-1 for next iteration when i===4 | num=4-1=3
    }
    return res;

};
module.exports = {pickUpStones};