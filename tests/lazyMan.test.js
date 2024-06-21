const {LazyMan} = require("../services/lazyMan");
describe('lazyMan', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    it('should log the greeting', () => {
        const log = (str) => {
            log.logs.push(str);
        };
        log.logs = [];
        LazyMan('Jack', log);
        setTimeout(() => {
            expect(log.logs.slice()).toEqual(["Hi, I'm Jack."]);
        }, 0);
        jest.runAllTimersAsync();
    });

    it('should return greeting and eat message', () => {
        const log = (str) => {
            log.logs.push(str);
        };
        log.logs = [];

        LazyMan('Jack', log).eat('banana');
        setTimeout(() => {
            expect(log.logs.slice()).toEqual(["Hi, I'm Jack.", "Eat banana."]);
        }, 0);
        jest.runAllTimersAsync();
    });

    it('should return greeting and consecutive eat message', () => {
        const log = (str) => {
            log.logs.push(str)
        };
        log.logs = [];

        LazyMan('Jack', log)
            .eat('banana')
            .eat('apple');
        setTimeout(() => {
            expect(log.logs.slice()).toEqual([
                "Hi, I'm Jack.",
                "Eat banana.",
                "Eat apple."]);
        }, 0);
        jest.runAllTimersAsync();
    });

    it('should eat after sleep', () => {
        const log = (str) => {
            log.logs = log.logs ?? [];
            log.logs.push(str);
        };
        LazyMan('Jack', log)
            .eat('banana')
            .sleep(1)
            .eat('apple');
        setTimeout(() => {
            expect(log.logs.slice()).toEqual([
                "Hi, I'm Jack.",
                "Eat banana."]);
        }, 0);
        jest.runOnlyPendingTimersAsync();
        setTimeout(() => {
            expect(log.logs.slice()).toEqual([
                "Hi, I'm Jack.",
                "Eat banana.",
                "Wake up after 1 second.",
                "Eat alpple."
            ]);
        }, 1500);
        jest.runOnlyPendingTimersAsync();
    });

    it('should sleep first', () => {
        const log = (str) => {
            log.logs.push(str);
        };
        log.logs = [];

        LazyMan('Jack', log)
            .eat('banana')
            .eat('apple')
            .sleepFirst(2);

        setTimeout(() => {
            expect(log.logs.slice()).toEqual([]);
        }, 0);

        jest.runOnlyPendingTimersAsync();
        setTimeout(() => {
            expect(log.logs.slice()).toEqual([]);
        }, 1500);
        jest.runOnlyPendingTimersAsync();
        setTimeout(() => {
            expect(log.logs.slice()).toEqual([
                "Wake up after 2 seconds.",
                "Hi, I'm Jack.",
                "Eat banana.",
                "Eat apple."
            ]);
        }, 2500);
        jest.runOnlyPendingTimersAsync();
    });
    it('should return expected', () => {
        const log = (str) => {
            log.logs.push(str);
        };
        log.logs = [];

        LazyMan('Jack', log)
            .eat('banana')
            .eat('apple')
            .sleepFirst(1)
            .eat('egg')
            .sleepFirst(1);
        setTimeout(() => {
            expect(log.logs.slice()).toEqual(['d']);
        }, 0);
        jest.runOnlyPendingTimersAsync();
        setTimeout(() => {
            expect(log.logs.slice()).toEqual(["Wake up after 1 second.s"]);
        }, 1500);
        jest.runOnlyPendingTimersAsync();
        setTimeout(() => {
            expect(log.logs.slice()).toEqual([
                "Wake up after 1 second.",
                "Wake up after 1 second.",
                "Hi, I'm Jack.",
                "Eat banana.",
                "Eat apple.",
                "Eat eggs."
            ]);
        }, 2500);

        jest.runOnlyPendingTimersAsync();
    });
});