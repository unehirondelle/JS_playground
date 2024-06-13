const uncompressString = str => {
    const stack = [];
    for (const char of str) {
        if (char !== ')') {
            stack.push(char);
        } else {
            let word = '';
            let count = '';

            while (stack.length && stack[stack.length - 1] !== '(') {
                word = stack.pop() + word;
            }
            stack.pop(); // remove '('

            while (stack.length && !isNaN(stack[stack.length - 1])) {
                count = stack.pop() + count;
            }
            stack.push(word.repeat(Number(count)));
        }
    }
    return stack.join('');
};

module.exports = {uncompressString};
