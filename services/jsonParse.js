const jsonParse = str => {
    const firstChar = str[0];
    const lastChar = str[str.length - 1];

    if (str === '' || firstChar === "'") {
        throw Error();
    }

    if (str === 'null') {
        return null;
    }

    if (str === '{}') {
        return {};
    }

    if (str === '[]') {
        return [];
    }

    //boolean
    if (str === 'true') {
        return true;
    }

    if (str === 'false') {
        return false;
    }

    //number
    if (Number(str) === Number(str)) {
        return Number(str);
    }

    //string
    if (firstChar === '"') {
        return str.slice(1, -1);
    }

    //array
    if (firstChar === '[') {
        let splitArr = str.slice(1, -1).split(',');
        return splitArr.map((el, i) => {
            if (el[0] === '{' && el[el.length-1] !== '}') {
                const lastObjIndex = splitArr.findIndex(el => el[el.length - 1] === '}');
                let newEl = splitArr.splice(i, lastObjIndex+1);
                return jsonParse(newEl);
            } else {
                return jsonParse(el);
            }
        });
    }

    //object
    if (firstChar === '{') {
        return str.slice(1, -1).split(',').reduce((acc, curr) => {
            const colonIndex = curr.indexOf(':');
            const key = curr.slice(0, colonIndex);
            const value = curr.slice(colonIndex + 1);
            acc[jsonParse(key)] = jsonParse(value);
            return acc;
        }, {});
    }
};

module.exports = {jsonParse};