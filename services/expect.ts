type Primitive = string | number | boolean | null | undefined;

export const expectRes = (val: Primitive) => {
    const toBe = (another: Primitive) => {
        if (val === another) {
            return true;
        }
        throw new Error("Not Equal");
    };

    const notToBe = (another: Primitive) => {
        if (val !== another) {
            return true;
        }
        throw new Error("Equal");
    };

    return {
        toBe, notToBe
    };
};