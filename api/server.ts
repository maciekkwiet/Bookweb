require('dotenv').config();

// DEV CONFIGURATION
process.env['NODE_ENV'] = 'production';

import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as winston from 'winston';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import dbConfig from './config/database';

const { createProxyMiddleware } = require('http-proxy-middleware');
// TODO - SWAGGER DOCCUMENTATION
// import swaggerUi from 'swagger-ui-express';
createConnection(dbConfig)
  .then((_connection) => {
    app.listen(port, () => {
      console.log('Server is running on port - DB', port);
    });
  })
  .catch((err) => {
    console.log('Unable to connect to db', err);
    process.exit(1);
  });

const logger = winston.add(new winston.transports.File({ filename: 'logfile.log', handleExceptions: true }));
const myStream = {
  write: (text: string) => {
    logger.log('info', text);
  },
};

const errorMiddleware = require('./middleware/errorMiddleware');
const mountRoutes = require('./routes');

const app = express();
const port = process.env.PORT || '3000';

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.disable('x-powered-by');

app.use(morgan('tiny', { stream: myStream }));
app.use(express.json());

mountRoutes(app);

if (process.env.NODE_ENV === 'production') {
  const apiProxy = createProxyMiddleware('/api', {
    target: 'https://books-web-portal.herokuapp.com/',
    changeOrigin: true,
  });

  app.use(express.static(path.join(__dirname, '../', '/client', '/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '/client', '/build', '/index.html'));
  });
  app.use('/api', apiProxy);
}

app.use(errorMiddleware);

app.set('port', port);

app.get('/', (request, response) => {
  response.json({ info: 'Teraz tylko robić :P' });
});

module.exports = app;
