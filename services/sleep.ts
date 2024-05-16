export const sleep = async (millis: number) => {
    await new Promise(res => {
        setTimeout(res, millis);
    });
};