const checkIfInstanceOf = (obj, classFn) => {
    if (obj === null || obj === undefined || typeof classFn !== 'function') {
        return false;
    }

    let currPrototype = Object.getPrototypeOf(obj);

    while (currPrototype !== null) {
        if (currPrototype === classFn.prototype) {
            return true;
        }
        currPrototype = Object.getPrototypeOf(currPrototype); // going level up and up on each parent initially it'll be null
    }
    return false
};

console.log(checkIfInstanceOf(new Date(), Date)) // true
class Animal {
}

class Dog extends Animal {
}

console.log(checkIfInstanceOf(new Dog(), Animal)); // true
console.log(checkIfInstanceOf(Date, Date)); // false
console.log(checkIfInstanceOf(5, Number)); // true

