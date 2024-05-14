import {createHelloWorld} from "./services/createHelloWorld";
import {createCounter, createCounterII} from "./services/counter";
import {expect} from "./services/expect";

const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req: any, res: any) => {

    res.send(createHelloWorld()());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// function createCounter() {
//     let value = 0;
//     function increment() {
//         return ++value;
//     }
//
//     return {
//         increment
//     }
// }
//
// const counter1 = createCounter();
// const counter2 = createCounter();
//
// console.log(counter1.increment());
// console.log(counter1.increment());
//
// console.log(counter2.increment());

// for (let i=0; i<3; i++) {
//     const timer = setTimeout(()=>console.log(i),0);
// }


 // const counter = createCounterII(5)
 // console.log(counter.increment()); // 6
 // console.log(counter.reset()); // 5
 // console.log(counter.decrement());


 // console.log(expect(5).toBe(5));
 // console.log(expect(5).notToBe(5));

const obj = {a: 1, b: 2}

for (const val in obj) {
    console.log(val);
}