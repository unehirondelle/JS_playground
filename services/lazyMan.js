function LazyMan(name, logFn) {
    const actionsMap = new Map();
    actionsMap.set('greet', name => logFn(`Hi, I'm ${name}.`));
    actionsMap.set('eat', str => logFn(`Eat ${str}.`));
    actionsMap.set('sleep', sec => {
        return sleep(sec).then(() => {
            return logFn(`Wake up after ${sec} second${sec > 1 ? 's' : ''}.`)
        })
    });

    const actions = [['greet', name]];

    async function execute() {
        for (const [action, arg] of actions) {
            await actionsMap.get(action)(arg);
        }
    }

    function sleep(sec) {
        return new Promise(resolve => {
            setTimeout(resolve, sec * 1000);
        });
    }

    Promise.resolve().then(execute);

    return {
        sleep(time) {
            actions.push(['sleep', time]);
            return this;
        },
        sleepFirst(time) {
            actions.unshift(['sleep', time]);
            return this;
        },
        eat(str) {
            actions.push(['eat', str]);
            return this;
        }
    }
}

module.exports = {LazyMan};
LazyMan('Jack', console.log).eat('banana').eat('apple').sleepFirst(2);