const express = require('express');
const router = express.Router();
const taskController = require('../controller/task.controller')

router.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

router.get('/api/tasks/:id', (req, res) => {
    taskController.getTask(req.params.id).then(data => res.json(data));
});

router.post('/api/task', (req, res) => {
    taskController.createTask(req.body.task).then(data => res.json(data));
});

router.put('/api/task/:id', (req, res) => {
    taskController.updateTask(req.params.id, req.body.task).then(data => res.json(data));
});

router.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});

module.exports = router;