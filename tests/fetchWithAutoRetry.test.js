const {fetchWithAutoRetry} = require("../services/fetchWithAutoRetry");
describe('fetchWithAutoRetry', () => {
    it('auto retries and resolves to the data', () => {
        let callCount = 0;
        let fetcher = () => new Promise((resolve, reject) => {
            callCount++;
            if (callCount >= 3) {
                resolve('bfe');
            } else {
                reject('error');
            }
        });

        fetchWithAutoRetry(fetcher, 4)
            .then((data) => {
                expect(callCount).toBe(3);
                expect(data).toBe('bfe');
            }).catch((error) => {
            const mock = jest.fn();
            mock();
            expect(mock).not.toHaveBeenCalled();
        });
    });
    it('rejects when max number of retries is over', () => {
        let callCount = 0;
        let fetcher = () => new Promise((resolve, reject) => {
            callCount++;
            reject('error');
        })
        fetchWithAutoRetry(fetcher, 6)
            .then((data) => {
                const mock = jest.fn();
                mock();
                expect(mock).not.toHaveBeenCalled();
            }).catch((error) => {
            expect(callCount).toBe(7);
            expect(error).toBe('error');
        });
    });
});