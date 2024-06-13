const removeChars = input => {
    const charToRemove = 'b';
    const patternToRemove = 'ac';
    let result = '';

    for (let index = 0; index < input.length; index++) {
        if (input[index] !== charToRemove) {
            if (input[index] + input[index + 1] === patternToRemove) {
                index++;
            } else {
                result += input[index];
            }
        }
    }
    if (input !== result) {
        return removeChars(result);
    }

    return result;
    //TODO: return to solve with stack
};

module.exports = {removeChars};