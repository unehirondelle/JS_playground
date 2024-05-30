const {log} = require("./log");

module.exports = debounceWithOptions = (func, wait, option = {leading: false, trailing: true}) => {
    const {leading, trailing} = option;
    let isDebounced = false;
    let timer;

    return (...args) => {
        if (leading) {
            if (!isDebounced) {
                func(...args);
            }
            clearTimeout(timer);
            timer = setTimeout(() => {
                // log(`first`)
                isDebounced = false;
            }, wait);
            isDebounced = true;

            // log(`first obj ${JSON.stringify(timer)}`);
        }
        if (trailing) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                // log('second')
                func(...args);
                isDebounced = false;
            }, wait);
            // log(`second obj ${JSON.stringify(timer)}`);
        }
    };
};

// let timer;
// (() => {
//     clearTimeout(timer);
//     console.log('clean initially');
// })();
// timer = setTimeout(() => console.log("first"), 0);
// (() => {
//     clearTimeout(timer);
//     console.log('clean');
// })();
// timer = setTimeout(() => console.log('second'), 0);
// (() => {
//     clearTimeout(timer);
//     console.log('clean again');
// })();


//alternative
// function debounce(func, wait, option = {leading: false, trailing: true}) {
//     let timer = null
//
//     return function(...args) {
//
//         let isInvoked = false
//         // if not cooling down and leading is true, invoke it right away
//         if (timer === null && option.leading) {
//             func.call(this, ...args)
//             isInvoked = true
//         }
//
//         // no matter what, timer needs to be reset
//         window.clearTimeout(timer)
//         timer = window.setTimeout(() => {
//             if (option.trailing && !isInvoked) {
//                 func.call(this, ...args)
//             }
//
//             timer = null
//         }, wait)
//     }
// }



