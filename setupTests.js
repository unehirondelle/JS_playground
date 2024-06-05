require("regenerator-runtime/runtime");

const console = require("console");
global.console = console;

module.exports = async () => {
    return {
        verbose: true
    };
};