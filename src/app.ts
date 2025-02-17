import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes'; 
import dotenv from 'dotenv';
dotenv.config();

const PORT = config.get<number>("port");

const app = express();

app.use(express.json());

// app.use('/auth', routes);



app.listen(PORT, async() => {
    logger.info(`App is running at at http://localhost:${PORT}`);
    await connect();
    routes(app);
});  