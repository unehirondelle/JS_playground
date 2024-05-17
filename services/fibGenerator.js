const fibGenerator = function* () { // generator function
    let n1 = 0;
    let n2 = 1;

    while (true) {
        yield n1; // exit from a generator loop
        [n1, n2] = [n2, n1 + n2]; // allows n1 and n2 to get new values in parallel
    }
};

// Infinite sequence => Iterator Design Patterns, Binary Search Tree (to keep track of pointers)

const gen = fibGenerator();

console.log(gen.next().value); //0
console.log(gen.next().value); //1