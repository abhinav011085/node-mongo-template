const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const logger = require('./logger/api.logger');
const taskRouter = require('./router/task.routes');

const app = express();

app.use(bodyParser.json());
app.use(taskRouter);

app.get('/', (req, res) => {
    res.send(`<h1>Invalid Request</h1>`)
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.info(`Server listening on the port  ${port}`);
})