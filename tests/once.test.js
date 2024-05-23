const {once} = require("../services/once");
describe('once', () => {
    it('calls function with same args only once', () => {
        const fn = a => a;
        const mock = jest.fn(fn);
        const onceCalled = once(mock);
        once(onceCalled(1));
        expect(mock).toBeCalledTimes(1);
        once(onceCalled(1));
        expect(mock).toBeCalledTimes(1);
        mock.mockRestore();
    });
    it('calls function with different args only once', () => {
        const fn = a => a;
        const mock = jest.fn(fn);
        const onceCalled = once(mock);
        once(onceCalled(1));
        expect(mock).toBeCalledTimes(1);
        once(onceCalled(2));
        expect(mock).toBeCalledTimes(1);
        expect(mock).toBeCalledWith(1);
        mock.mockRestore();
    });
});