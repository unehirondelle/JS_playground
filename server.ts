import {createHelloWorld} from "./services/createHelloWorld";
import {once} from "./services/once";
import {memoize} from "./services/memoize";

const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req: any, res: any) => {

    res.send(createHelloWorld()());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1
