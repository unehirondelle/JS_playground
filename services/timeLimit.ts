export const timeLimit = (fn: (...args: any[]) => any, t: number): (...args: any[]) => any => {

    return async (...args) => {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject("Time Limit Exceeded"), t);

            fn(...args)
                .then((response: any) => resolve(response))
                .catch((e: any) => reject(e))
                .finally(() => clearTimeout(timer));
        });
    };
};