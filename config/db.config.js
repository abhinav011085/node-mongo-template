const mongoose = require('mongoose');
const logger = require('../logger/api.logger');

const connect = () => {

    const url = process.env.DB_CONNECTION_STRING;

    mongoose.connect(url, {
        autoIndex: false
    })

    mongoose.set('strictQuery', true);


    mongoose.connection.once("open", async () => {
        logger.info("Connected to database");
    });
      
    mongoose.connection.on("error", (err) => {
        logger.error("Error connecting to database  ", err);
    });
}

const disconnect = () => {
    
    if (!mongoose.connection) {
      return;
    }
    
    mongoose.disconnect();

    mongoose.once("close", async () => {
        logger.info("Diconnected  to database");
    });

};

module.exports = {
    connect,
    disconnect
}