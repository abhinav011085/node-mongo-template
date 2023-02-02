// const bole = require('bole');

// const logger = bole();

class APILogger {

    info(message) {
        console.log(message);
    }

    info(message, data) {
        console.log(`${message}   ${undefined != data ? JSON.stringify(data) : ''}`);
    }

    error(message) {
        logger.error(message);
    }
}

module.exports = new APILogger();