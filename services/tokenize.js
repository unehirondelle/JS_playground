const tokenize = function* (str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== ' ') {
            if (!isNaN(parseInt(str.charAt(i)))) {
                let num = str.charAt(i);
                let j = i + 1;
                while (!isNaN(parseInt(str.charAt(j)))) {
                    num += str.charAt(j);
                    j++;
                    i++;
                }
                yield num;
            } else {
                yield str.charAt(i);
            }
        }
    }
};

module.exports = {tokenize};