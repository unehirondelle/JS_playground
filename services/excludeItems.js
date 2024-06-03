function excludeItems(items, excludes) {
    // excludes.forEach(pair => {
    //     items = items.filter(item => {
    //         return item[pair.k] !== pair.v
    //     });
    // })
    //
    // return items;


    const excludesMap = new Map();

    excludes.forEach(({k, v}) => {
        if (!excludesMap.has(k)) {
            excludesMap.set(k, new Set());
        }
        excludesMap.get(k).add(v);
    });

    return items.filter(item => {
        return Object.entries(item).find(([k, v]) => excludesMap.has(k) && excludesMap.get(k).has(v)) === undefined;
    });
}

module.exports = {excludeItems};