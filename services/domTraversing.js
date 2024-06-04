const {log} = require("./log");

const findCorrespondingNode = (rootA, rootB, target) => {
    if (rootA === target) {
        log(`found target: ${rootB}`);
        return rootB || null;
    }

    //BFS
    // const queueA = [rootA];
    // const queueB = [rootB];

    // while (queueA.length) {
    //   const currentA = queueA.shift();
    //   const currentB = queueB.shift();

    //   if (currentA === target) {
    //     return currentB;
    //   }

    //   currentA?.children && queueA.push(...currentA.children);
    //   currentB?.children && queueB.push(...currentB.children);
    // }

    // return null;


    //DFS
    // const stack = [[rootA, rootB]];
    // log(`rootA: ${JSON.stringify(rootA)}`);
    // log(`rootB: ${JSON.stringify(rootB)}`);
    // const visitedA = new Set();
    //
    // while (stack.length) {
    //     const [currentA, currentB] = stack.shift();
    //     log(`stack: ${JSON.stringify(stack)}`);
    //     log(`currentA: ${JSON.stringify(currentA)}`);
    //     log(`currentB: ${JSON.stringify(currentB)}`);
    //
    //     if (currentA === target) {
    //         log(`found target: ${currentB}`);
    //         return currentB;
    //     }
    //
    //     if (visitedA.has(currentA)) {
    //         log('SAME');
    //         continue;
    //     }
    //
    //     visitedA.add(currentA);
    //
    //     log(`Achildren: ${JSON.stringify(currentA?.children)}`);
    //
    //     currentA?.children && [...currentA.children].forEach((child, i) => {
    //         stack.push([child, currentB?.children?.[i]]);
    //     });
    // }

    //recursion - solve subtask similar to the main task
    log(`rootA: ${JSON.stringify(rootA)}`);
    log(`rootB: ${JSON.stringify(rootB)}`);
    if (rootA?.children) {
        for (let i in [...rootA.children]) {
            const result = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
            log(`result: ${JSON.stringify(result)}`);
            if (result || result === null) {
                return result;
            }
        }
    }
}
module.exports = {findCorrespondingNode};

const A = {
    1: {
        children: [
            {
                3: {
                    children: [9, 11]
                }
            },
            5,
            7
        ]
    }
};

const B = {
    2: {
        children: [
            {
                4: {
                    children: [10, 12]
                }
            },
            6,
            8
        ]
    }
}

findCorrespondingNode(A[1], B[2], 5); //6