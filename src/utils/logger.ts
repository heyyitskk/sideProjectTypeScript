import logger from 'pino';
import dayjs from 'dayjs';

const pretty = require('pino-pretty');

const log = logger({
    base:{
        pid: false
    },
    timestamp:() => `,"time":"${dayjs().format('YYYY-MM-DD HH:mm:ss')}"`,
},pretty());

export default log;

