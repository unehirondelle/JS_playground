import {createHelloWorld} from "./services/createHelloWorld";
import {throttle} from "./services/throttle";
import {promiseAll} from "./services/promiseAll.js";

const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req: any, res: any) => {

    res.send(createHelloWorld()());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


// const promise = promiseAll([() => new Promise(res => res(42)), () => new Promise(res => res(24))]);
const promise = promiseAll([() => new Promise(resolve => setTimeout(() => resolve(1), 200)), () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))]);
 promise.then(console.log).catch(console.log);