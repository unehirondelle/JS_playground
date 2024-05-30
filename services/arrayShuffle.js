const {log} = require("./log");

const arrayShuffle = arr => {
    log();
    // const newArr = [];
    //
    // const arrToPickFrom = [...arr];
    //
    // while (arrToPickFrom.length > 0) {
    //     const [el] = arrToPickFrom.splice(Math.floor(Math.random() * arrToPickFrom.length), 1);
    //     newArr.push(el);
    // }
    // return newArr;

    for (let i = arr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const storage = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = storage;
    }
    return arr;
};

module.exports = {arrayShuffle};

// log(arrayShuffle([1, 2, 3, 4]))