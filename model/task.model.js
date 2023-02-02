const mongoose = require('mongoose');
const logger = require('../logger/api.logger');

const taskSchema = new mongoose.Schema({ name: { type: "string", required: true, index: true }, 
                description: 'string', 
                createDate: 'date', 
                updatedDate: 'date', 
                createdBy: 'string', 
                updatedBy: 'string' },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

taskSchema.post('save', function(error, doc, next) {
    if (error){
        logger.info("Post Save Error:", error.message);
        next(error);
    }
});

taskSchema.pre('save', function(error, doc, next) {
    if (error){
        logger.info("Pre Save Error:", error.message);
        next(error);
    }
});

const Task = mongoose.model('tasks', taskSchema);

module.exports = {
    Task
}