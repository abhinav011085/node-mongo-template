const taskService  = require('../service/task.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getTasks() {
        return await taskService.getTasks();
    }

    async createTask(task) {
        return await taskService.createTask(task);
    }

    async updateTask(task) {
        return await taskService.updateTask(task);
    }

    async deleteTask(taskId) {
        return await taskService.deleteTask(taskId);
    }
}
module.exports = new TodoController();