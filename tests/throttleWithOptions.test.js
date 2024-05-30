const throttle = require("../services/throttleWithOption");

describe('throttleWithOptions', () => {
        jest.useFakeTimers();

        const run = (input, option, initialCalls = []) => {
            const start = Date.now();
            const calls = initialCalls;

            const func = (arg) => {
                let currentTime = Date.now() - start;
                calls.push(`${arg}@${currentTime}`);
            };

            const throttled = throttle(func, 3, option);
            input.forEach((call) => {
                const [arg, time] = call.split('@');
                setTimeout(() => throttled(arg), time);
            });
            jest.runAllTimers();
            return calls;
        };

        it('leading:true, trailing: true', () => {
            const option = {leading: true, trailing: true};

            const input1 = ['A@0', 'B@1'];
            const input2 = ['A@0'];
            const input3 = ['A@1', 'B@2', 'C@3', 'D@5', 'E@11', 'F@13', 'G@14'];

            expect(run(input1, option)).toEqual(["A@0", "B@3"]);
            expect(run(input2, option)).toEqual(["A@0"]);
            expect(run(input3, option)).toEqual(["A@1", "C@4", "D@7", "E@11", "G@14"]);
        });

        it('leading:true, trailing: false', () => {
            const option = {leading: true, trailing: false};

            const input1 = ['A@0', 'B@1'];
            const input2 = ['A@1', 'B@2', 'C@3', 'D@5', 'E@11', 'F@13', 'G@14'];

            expect(run(input1, option)).toEqual(["A@0"]);
            expect(run(input2, option)).toEqual(["A@1", "D@5", "E@11"]);
        });

        it('leading:false, trailing: true', () => {
            const option = {leading: false, trailing: true};

            const input1 = ['A@0', 'B@1'];
            const input2 = ['A@1', 'B@2', 'C@3', 'D@5', 'E@11', 'F@13', 'G@14'];

            expect(run(input1, option)).toEqual(["B@3"]);
            expect(run(input2, option)).toEqual(["C@4", "D@7", "G@14"]);
        });

        it('leading:false, trailing: false', () => {
            const option = {leading: false, trailing: false};

            const input1 = ['A@0', 'B@1'];

            expect(run(input1, option)).toEqual([]);
        });
    }
);