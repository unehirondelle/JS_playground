
const flattenThunk = thunk => {
    return thunkCB => {
        const cbWrapper = (err, data) => {
            if (err) {
                thunkCB(err);
            } else if (typeof data === 'function') {
                data(cbWrapper);
            } else {
                thunkCB(err, data);
            }

        };

        thunk(cbWrapper);
    };
};

module.exports = {flattenThunk};


