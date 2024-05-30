module.exports = throttle = (func, wait, option = {leading: true, trailing: true}) => {
    const {leading, trailing} = option;
    let isThrottled = false;
    let nextArgs = null;
    let timer;

    const helper = () => {
        isThrottled = false;
        clearTimeout(timer);

        if (nextArgs) {
            func(...nextArgs);
            isThrottled = true;
            nextArgs = null;
            timer = setTimeout(helper, wait);
        }
    };

    return (...args) => {
        if (leading && trailing) {
            if (isThrottled) {
                nextArgs = [...args];
            } else {
                func(...args);
                isThrottled = true;
                timer = setTimeout(helper, wait);
            }
        } else if (leading && !trailing) {
            if (isThrottled) {
                nextArgs = null;
            } else {
                func(...args);
                isThrottled = true;
                timer = setTimeout(helper, wait);
            }
        } else if (!leading && trailing) {
            if (!isThrottled) {
                isThrottled = true;
                timer = setTimeout(helper, wait);
            } else {
                nextArgs = [...args];
            }
        }
    };
};