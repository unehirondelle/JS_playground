module.exports = class EventEmitter {
    eventMap = {}; // event -> Set() of callbacks

    subscribe(eventName, callback) {
        if (!Object.hasOwn(this.eventMap, eventName)) {
            this.eventMap[eventName] = new Set();
        }
        this.eventMap[eventName].add(callback);

        return {
            unsubscribe: () => {
                this.eventMap[eventName].delete(callback);
            }
        };
    }

    emit(eventName, args = []) {
        const res = [];
        (this.eventMap[eventName] ?? []).forEach(cb => {
            res.push(cb(...args));
        });
        return res;
    }
};

// const emitter = new EventEmitter();
//
// // Subscribe to the onClick event with onClickCallback
// function onClickCallback() {
//     return 99;
// }
//
// const sub = emitter.subscribe('onClick', onClickCallback);
//
// console.log(emitter.emit('onClick')); // [99]
// console.log(sub.unsubscribe()); // undefined
// console.log(emitter.emit('onClick')); // []