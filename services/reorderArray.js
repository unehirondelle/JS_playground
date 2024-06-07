const reorderArray = (items, newOrder) => {
    // const map = new Map();
    //
    // for (let index = 0; index < items.length; index++) {
    //     map.set(newOrder[index], items[newOrder[index]]);
    //
    //     if (map.has(index) && map.get(index) !== items[index]) {
    //         // prevent value overwrite
    //         items[newOrder[index]] = map.get(index);
    //     } else {
    //         items[newOrder[index]] = items[index];
    //     }
    // }


    let i = 0;
    while (i < items.length) {
        if (i !== newOrder[i]) {
            let newIndex = newOrder[i];
            [items[i], items[newIndex]] = [items[newIndex], items[i]];
            [newOrder[i], newOrder[newIndex]] = [newOrder[newIndex], newOrder[i]];
        }
        i++;
    }

    // for (const index in items) {
    //     map.set(newOrder[index], items[index]);
    // }
    // items = Array.from(map, ([index, char]) => items[index] = char); //not algo way but nice to know
};

module.exports = {reorderArray};
