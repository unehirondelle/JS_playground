const decode2DArrayMessage = arr => {
    // let result = '';
    //
    // if (arr.length === 0 || arr[0].length === 0) {
    //     return result;
    // }
    //
    // let moveFurther = true;
    // let currX = 0;
    // let currY = 0;
    //
    // const moveDown = () => {
    //     currX++;
    //     currY++;
    // };
    //
    // const moveUp = () => {
    //     currX--;
    //     currY++;
    // };
    //
    // while (moveFurther) {
    //     const action = () => {
    //         const isDown = arr[currX + 1] !== undefined && arr[currX + 1][currY + 1] !== undefined;
    //         const isUp = arr[currX - 1] !== undefined && arr[currX - 1][currY + 1] !== undefined;
    //         result += arr[currX][currY];
    //
    //         if (isDown || (currX === 0 && arr[currX + 1] !== undefined && arr[currX + 1][currY + 1] !== undefined)) {
    //             moveDown();
    //             action();
    //         } else if (isUp) {
    //             moveUp();
    //             action();
    //         } else if (!isDown && !isUp) {
    //             moveFurther = false;
    //         }
    //     };
    //     action();
    // }
    //
    // return result;

    let i = 0;
    let j = 0;
    let cols = arr[0]?.length;
    let decoded = '';
    let step = 1;

    while (j < cols) {
        decoded += arr[i][j];
        if (!arr[i + step]) {
            step *= -1;
        }
        i += step;
        j++;
    }

    return decoded;
};

module.exports = {decode2DArrayMessage};

const input = [
    ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D']
];
console.log(decode2DArrayMessage(input));
// expect(decode(input)).toBe('IROCLED')