const fetchWithAutoRetry = (fetch, maxRetryCount) => {
    return fetch().catch(e => {
        if (maxRetryCount > 0) {
            return fetchWithAutoRetry(fetch, --maxRetryCount);

        } else {
            throw e;
        }
    });
};

module.exports = {fetchWithAutoRetry};