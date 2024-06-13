const {BrowserHistory} = require("../classes/browserHistory");
describe('browserHistory', () => {
    it('returns first url given a history with a single url', () => {
        const history = new BrowserHistory('A');
        expect(history.current).toBe('A');
    });
    it('should return last url from a few visited', () => {
        const history = new BrowserHistory();
        history.visit('A');
        history.visit('B');
        expect(history.current).toBe('B');
    });
    it('should return expected if goes back after a few visits', () => {
        const history = new BrowserHistory()
        history.visit('A');
        history.visit('B');
        history.goBack();
        expect(history.current).toBe('A');
    });
    it('should return new empty tab when reach the first page', () => {
        const history = new BrowserHistory('X');
        history.visit('A');
        history.goBack();
        history.goBack();
        expect(history.current).toBe('X');
    });
    it('should return last history element when trying to going forward from the last one', () => {
        const history = new BrowserHistory();
        history.visit('A');
        history.visit('B');
        history.visit('C');
        history.goBack();
        expect(history.current).toBe('B');
        history.visit('D');
        expect(history.current).toBe('D');
        history.forward();
        expect(history.current).toBe('D');
    });
});