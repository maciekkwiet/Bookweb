require('dotenv').config();

import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as http from 'http';
import * as winston from 'winston';
const { createProxyMiddleware } = require('http-proxy-middleware');

const logger = winston.add(new winston.transports.File({ filename: 'logfile.log', handleExceptions: true }));
const myStream = {
  write: (text: string) => {
    logger.log('info', text);
  },
};
const apiProxy = createProxyMiddleware('/api', {
  target: 'https://books-web-portal.herokuapp.com/',
  changeOrigin: true,
});

const errorMiddleware = require('./middleware/errorMiddleware');
const mountRoutes = require('./routes');

const app = express();

const server = http.createServer(app);
const port = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('tiny', { stream: myStream }));
app.use(express.json());

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.disable('x-powered-by');

mountRoutes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../', '/client', '/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '/client', '/build', '/index.html'));
  });
  app.use('/api', apiProxy);
}
app.use(errorMiddleware);

app.set('port', port);

server.listen(port);

console.log('Server listening on port ' + port);

app.get('/', (request, response) => {
  response.json({ info: 'Teraz tylko robić :P' });
});

module.exports = app;
