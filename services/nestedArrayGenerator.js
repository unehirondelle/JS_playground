const nestedArrayGenerator = function* (arr) {
    for (const val of arr) {
        if (Array.isArray(val)) {
            //recursive
            yield* nestedArrayGenerator(val) // only spits out one val when called without going into another generator
        } else {
            yield val;
        }
    }
};

const gen = nestedArrayGenerator([1, [2, 3], 4]);

console.log(gen.next().value) //1
console.log(gen.next().value) //2
console.log(gen.next().value) //3
console.log(gen.next().value) //4