import {createHelloWorld} from "./services/createHelloWorld";
import {once} from "./services/once";
import {memoize} from "./services/memoize";
import {curry} from "./services/curry";
import {promisePool} from "./services/promisePool";

const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req: any, res: any) => {

    res.send(createHelloWorld()());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


const sleep = (t:number) => new Promise(res => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log);