const log = (str, notStr) => {
    const addFirstChar = num => (num + 1).toString().padStart(2, '0');
    const date = new Date();
    const calendar = [
        date.getFullYear(),
        addFirstChar(date.getMonth()),
        addFirstChar(date.getDate())
    ];
    const time = [
        addFirstChar(date.getHours()),
        addFirstChar(date.getMinutes()),
        addFirstChar(date.getSeconds()),
    ];

    console.log(`${calendar.join('-')}  ${time.join(':')}.${date.getMilliseconds()} | ${str}`, notStr ? notStr : undefined);
};

module.exports = {log};