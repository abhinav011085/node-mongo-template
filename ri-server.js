const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const logger = require('./logger/api.logger');

const taskController = require('./controller/task.controller')


const app = express();

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.get('/api/tasks/:id', (req, res) => {
    taskController.getTask(req.params.id).then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    taskController.createTask(req.body.task).then(data => res.json(data));
});

app.put('/api/task/:id', (req, res) => {
    taskController.updateTask(req.params.id, req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>Invalid Request</h1>`)
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.info(`Server listening on the port  ${port}`);
})