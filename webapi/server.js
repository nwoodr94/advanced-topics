// Express
const express = require("express");
const app = express();
const controller = require('./user-controller/user-controller.js');

// Configuration
const port = 8000;
const host = 'localhost';

// Middleware
const cors = require('cors');
const corsOptions = { origin: '*' };
app.use(cors(corsOptions));

// Router
app.use('/', controller);

// Server
app.listen(port, host, () => console.log(`Server listening at ${host}:${port}`));