const log = (str) => {
    console.log(`MOCKED: ${new Date().toISOString()} ${str}`);
};

module.exports = {log};