const EventEmitter = require("../classes/eventEmitter");
describe('eventEmitter', () => {
    it('returns [] when no callbacks are subscribed', () => {
        const emitter = new EventEmitter();
        expect(emitter.emit('firstEvent')).toEqual([]);
    });

    it('returns result when subscription exists', () => {
        const emitter = new EventEmitter();
        const cb1 = () => 5;
        emitter.subscribe('firstEvent', cb1);
        expect(emitter.emit('firstEvent')).toEqual([5]);
    });

    it('returns [] when unsubscribed', () => {
        const emitter = new EventEmitter();
        const cb1 = () => 5;
        const subscription = emitter.subscribe('firstEvent', cb1);
        expect(emitter.emit('firstEvent')).toEqual([5]);
        subscription.unsubscribe();
        expect(emitter.emit('firstEvent')).toEqual([]);
    });

    it('returns array of results when subscription exists for same event name but different cb', () => {
        const emitter = new EventEmitter();
        const cb1 = () => 5;
        const cb2 = () => 6;
        emitter.subscribe('firstEvent', cb1);
        emitter.subscribe('firstEvent', cb2);
        expect(emitter.emit('firstEvent')).toEqual([5, 6]);
    });

    it('returns expected result when emitted called with args', () => {
        const emitter = new EventEmitter();
        const cb1 = (...args) => args.join(', ');
        emitter.subscribe('firstEvent', cb1);
        expect(emitter.emit('firstEvent', [1, 2, 3])).toEqual(['1, 2, 3']);
    });

    it('removes only targeted subscriptions', () => {
        const emitter = new EventEmitter();
        const cb1 = () => 5;
        const cb2 = () => 6;
        emitter.subscribe('firstEvent', cb1);
        const subscription = emitter.subscribe('firstEvent', cb2);
        expect(emitter.emit('firstEvent')).toEqual([5, 6]);
        subscription.unsubscribe();
        expect(emitter.emit('firstEvent')).toEqual([5]);
    });
});