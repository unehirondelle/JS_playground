const {log} = require("./log");

function memoizeOne(func, isEqual) {
    let memoizedArgs = [];
    let memoizedResponse;
    let memoizedThis;

    return function (...args) {
        log(`--CALL--memoizedArgs: ${JSON.stringify(memoizedArgs)} | memoizedResponse: ${JSON.stringify(memoizedResponse)} | args: ${JSON.stringify(args)}`);
        if (memoizedArgs.length > 0) { // not initial call
            log('not initial call');
            const isMemoized = isEqual ? isEqual(memoizedArgs, args) : JSON.stringify(memoizedArgs) === JSON.stringify(args);
            log(`isMemoized: ${isMemoized}`);
            if (isMemoized && memoizedThis === this) {
                log(`>> memoizedResponse: ${JSON.stringify(memoizedResponse)}`);
                return memoizedResponse;
            }
        }
        memoizedArgs = [...args];
        // log(`this: ${JSON.stringify(this)}`);
        memoizedResponse = func.apply(this, args);
        memoizedThis = this;
        log(`>> response: ${JSON.stringify(memoizedResponse)}`);
        return memoizedResponse;
    }
};

module.exports = {memoizeOne};