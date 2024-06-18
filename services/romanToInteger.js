const romanToInteger = str => {
    const charMap = new Map();
    charMap.set('I', 1);
    charMap.set('V', 5);
    charMap.set('X', 10);
    charMap.set('L', 50);
    charMap.set('C', 100);
    charMap.set('D', 500);
    charMap.set('M', 1000);

    let result = charMap.get(str.charAt(str.length - 1));
    for (let i = str.length - 2; i >= 0; i--) {
        if (charMap.get(str.charAt(i)) < charMap.get(str.charAt(i + 1))) {
            result -= charMap.get(str.charAt(i));
        } else {
            result += charMap.get(str.charAt(i));
        }
    }

    return result;
};

module.exports = {romanToInteger};