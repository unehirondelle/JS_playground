const {checkIfInstanceOf} = require("../services/checkIfInstanceOf");
describe('checkIfInctanceOf', () => {
    it('returns true if object is instance of the target', () => {
        expect(checkIfInstanceOf(new Date(), Date)).toBe(true);
    });

    it('returns true if object is instance of the newly created target', () => {
        class Animal {
        }

        class Dog extends Animal {
        }

        expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true);
    });

    it('returns true given a primitive and its object as the target', () => {
        expect(checkIfInstanceOf(5, Number)).toBe(true);
    });

    it('returns false given an instance of a class as the target', () => {
        expect(checkIfInstanceOf(Date, Date)).toBe(false);
    });
});