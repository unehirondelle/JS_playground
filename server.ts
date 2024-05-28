import {createHelloWorld} from "./services/createHelloWorld";

const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req: any, res: any) => {

    res.send(createHelloWorld()());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});