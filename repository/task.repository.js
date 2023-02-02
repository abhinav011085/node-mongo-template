const { connect, disconnect } = require('../config/db.config');
const { Task } = require('../model/task.model');
const logger = require('../logger/api.logger');

class TaskRepository {

    constructor() {
        connect();
    }

    async getTasks() {
        const tasks = await Task.find({});
        return tasks;
    }

    async createTask(task) {
        let data = {};
        try {
            data = await Task.create(task);
        } catch(err) {
            logger.info('Error::' + err);
            data = err;
        }
        return data;
    }

    async updateTask(task) {
        let data = {};
        try {
            data = await Task.updateOne(task);
        } catch(err) {
            logger.info('Error::' + err);
            data = err;
        }
        return data;
    }

    async deleteTask(taskId) {
        let data = {};
        try {
            data = await Task.deleteOne({_id : taskId});
        } catch(err) {
            logger.info('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new TaskRepository();