const sleep = async (millis) => {
    await new Promise(res => {
        setTimeout(res, millis);
    });
};

module.exports = {sleep};