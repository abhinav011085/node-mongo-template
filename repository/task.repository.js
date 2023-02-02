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

    async getTask(id) {
        const task = await Task.findOne({_id: id});
        return task;
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

    async updateTask(id, task) {
        let data = {};
        try {
            let filter = {_id: id}
            data = await Task.findOneAndUpdate(filter, task, {new: true});      //added new: true so that it would return the updated object instead of the old one
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