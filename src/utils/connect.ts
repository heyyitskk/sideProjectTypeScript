import mongoose from "mongoose";
import config from 'config';
import logger from './logger';

function connect() {
    const dbUri = config.get<string>("dbUri");
    return mongoose.connect(dbUri)
    .then(() => {
        logger.info("Connected to Db");
    }).catch((error) => {
        logger.error('Could not connect to Db');
        process.exit(1);
    }); 
} 

export default connect;