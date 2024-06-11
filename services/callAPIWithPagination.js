const callAPIWithPagination = async (amount = 5) => {
    const result = [];
    const getResults = (startWith = 0) => {
        return fetchList(startWith).then(({items}) => {
            result.push(...items);

            if (result.length >= amount || !items.length) {
                return result.slice(0, amount);
            }

            return getResults(result[result.length - 1].id);
        });
    };
    return getResults();
};

module.exports = {callAPIWithPagination};
