const {log} = require("./log");
const classNames = (...args) => {
    const res = [];
    args.forEach(arg => {
        // log(`arg:`, arg);
        if (typeof arg === 'string' || typeof arg === "number") {
            res.push(arg);
        } else if (typeof arg === 'object' && arg !== null) {
            if (Array.isArray(arg)) { // array
                // log(`>> arr arg: ${JSON.stringify(arg)}`);
                res.push(classNames(...arg));
            } else { // object
                // log(`obj arg: ${JSON.stringify(arg)}`);
                Object.entries(arg).forEach(([key, value]) => {
                    if (value) {
                        res.push(key);
                    }
                });
            }
        }
    });
    // log(`res: ${JSON.stringify(res)}`);
    return res.join(' ');
};

module.exports = {classNames};