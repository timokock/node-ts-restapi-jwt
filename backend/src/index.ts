import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { startConnection } from './database';

async function init() {
    startConnection();
    await app.listen(app.get('port'));
    console.log('Server running on port ', app.get('port'));
}

init();