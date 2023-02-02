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
        console.log(message);
    }
}

module.exports = new APILogger();