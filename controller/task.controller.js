const taskService  = require('../service/task.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getTasks() {
        return await taskService.getTasks();
    }

    async getTask(id) {
        return await taskService.getTask(id);
    }

    async createTask(task) {
        return await taskService.createTask(task);
    }

    async updateTask(id, task) {
        return await taskService.updateTask(id, task);
    }

    async deleteTask(taskId) {
        return await taskService.deleteTask(taskId);
    }
}
module.exports = new TodoController();