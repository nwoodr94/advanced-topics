// Express
const express = require("express");
const app = express();
const path = require('path');

// Configuration
const port = 8001;
const host = '0.0.0.0';

// Middleware
const cors = require('cors');
const corsOptions = { origin: '*' };
app.use(cors(corsOptions));

// Router
//app.use('/', controller);

app.use(express.static('/home/nwoodr94/code/real-time/client/build/'))

app.get('/test', (req, res) => {
    res.send("hot reload in docker-compose");
  })

// Server
app.listen(port, host, () => console.log(`Server listening at ${host}:${port}`));