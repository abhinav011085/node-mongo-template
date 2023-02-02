const taskRepository  = require('../repository/task.repository');

class TaskService {

    constructor() {}

    async getTasks() {
        return await taskRepository.getTasks();
    }

    async getTask(id) {
        return await taskRepository.getTask(id);
    }

    async createTask(task) {
        return await taskRepository.createTask(task);
    }

    async updateTask(id, task) {
        return await taskRepository.updateTask(id, task);
    }

    async deleteTask(taskId) {
        return await taskRepository.deleteTask(taskId);
    }

}

module.exports = new TaskService();