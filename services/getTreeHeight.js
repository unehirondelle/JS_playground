const getTreeHeight = tree => {
    if (!tree) {
        return 0;
    }

    if (tree?.children && [...tree.children].length) {
        const arr = tree.children.map(child => getTreeHeight(child));
        return 1 + Math.max(...arr);
    }

    return 1;
};

const A = {
    1: {
        children: [
            {
                children: [9, 11]
            },
            5,
            7,
            {
                children: [13, 15]
            }
        ]
    }
};

console.log(getTreeHeight(A[1])); //3