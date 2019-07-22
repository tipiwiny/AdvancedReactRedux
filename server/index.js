const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const keys = require('./config/keys')
const cors = require('cors');


require('./models/Users');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const router = require('./router')

app.use(morgan('combined'));
app.use(cors())
app.use(bodyParser.json({ type: '*/*'}))

router(app)
const port = 3090;

const server = http.createServer(app)

server.listen(port);
console.log('Server listening on:', port)
